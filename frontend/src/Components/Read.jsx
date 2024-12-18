import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Styles/Read.scss";

const Read = () => {
  const location = useLocation();
  const { student } = location.state || {};

  if (!student) {
    return <h2>No student data available</h2>;
  }

  return (
    <div className="read-container">
      <h2>Student Details</h2>
      <div className="student-details">
        <h3>ID: {student.id}</h3>
        <h3>Name: {student.name}</h3>
        <h3>Email: {student.email}</h3>
        <Link to="/" className="btn-primary">
          Back
        </Link>
        <Link to={`/edit/${student.id}`} className="btn-primary">
        Edit
        </Link>
      </div>
    </div>
  );
};

export default Read;
