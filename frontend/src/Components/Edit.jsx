import React, { useState, useEffect } from "react";
import "../Styles/Edit.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { student } = location.state || {};

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (student) {
      setValues({
        name: student.name || "",
        email: student.email || "",
      });
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/students/${student.id}`, values)
      .then((res) => {
        console.log("Student updated:", res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Student</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            type="text"
            id="name"
            value={values.name}
            placeholder="Enter student's name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            id="email"
            value={values.email}
            placeholder="Enter student's email"
          />
        </div>
        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
