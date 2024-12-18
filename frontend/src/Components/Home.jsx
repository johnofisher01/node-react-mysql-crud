import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/delete/${id}`)
      .then(() => {
        setData(data.filter((student) => student.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2 className="title">Student Records</h2>
        <Link to="/create" className="btn-primary create-btn">
          Create +
        </Link>
      </div>
      <table className="styled-table">
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
                <Link
                  to={`/read/${student.id}`}
                  state={{ student }}
                  className="btn-primary"
                >
                  Read
                </Link>
                <Link
                  to={`/edit/${student.id}`}
                  state={{ student }}
                  className="btn-secondary"
                >
                  Edit
                </Link>
                <button
                  className="btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
