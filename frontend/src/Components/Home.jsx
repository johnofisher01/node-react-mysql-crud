import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Student Records</h1>
      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
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
                  onClick={() => console.log("Replace", student.id)}
                >
                  Replace
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
