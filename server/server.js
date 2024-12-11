import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"crud"



})

app.listen (8081, ()=> {
    console.log("listening")
})