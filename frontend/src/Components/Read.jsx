import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Read.scss";

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/read/${id}`);
        setStudent(res.data[0]);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch student details");
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div className="read-container">
      <h2>Student Details</h2>
      {student ? (
        <div className="student-details">
          <h3>ID: {student.ID}</h3>
          <h3>Name: {student.Name}</h3>
          <h3>Email: {student.Email}</h3>
          <Link to="/" className="btn-primary">Back</Link>
        </div>
      ) : (
        <h2>No student found</h2>
      )}
    </div>
  );
};

export default Read;
