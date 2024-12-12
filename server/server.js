import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password_auth",
    database: "my_STEM"
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1); 
    }
    console.log('Connected to MySQL database');
});

app.get('/', async (req, res) => {
    try {
        const sql = "SELECT * FROM students";

        const queryPromise = new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const result = await queryPromise;
        res.json(result);

    } catch (error) {
        console.error('Error inside server:', error); 
        res.status(500).json({ Message: "Error inside server", Error: error.message });
    }
});

app.post('/students', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ Message: "Name and Email are required" });
    }

    const sql = "INSERT INTO students (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error inserting student:', err);
            return res.status(500).json({ Message: "Error inside server", Error: err.message });
        }
        res.status(201).json({ Message: "Student added successfully", StudentID: result.insertId });
    });
});

app.listen(8081, () => {
    console.log("Server is running on http://localhost:8081");
});
