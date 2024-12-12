import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Home.scss";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="home-container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="title">Student Records</h1>
        <Button variant="success" className="create-btn">
          <Link to="/create" className="text-white text-decoration-none">
            Create +
          </Link>
        </Button>
      </div>
      <Table className="styled-table" striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td className="action-buttons">
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => console.log("Read", student.id)}
                >
                  Read
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => console.log("Edit", student.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => console.log("Delete", student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
