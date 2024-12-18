import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Student Details</h2>
      {student ? (
        <>
          <h2>ID: {student.ID}</h2>
          <h2>Name: {student.Name}</h2>
          <h2>Email: {student.Email}</h2>
        </>
      ) : (
        <h2>No student found</h2>
      )}
    </div>
  );
};

export default Read;
