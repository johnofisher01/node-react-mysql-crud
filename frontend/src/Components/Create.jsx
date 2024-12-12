import React from "react";
import "../Styles/Create.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/students", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  return (
    <div className="create-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            type="text"
            id="name"
            placeholder="Enter student's name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            id="email"
            placeholder="Enter student's email"
          />
        </div>
        <button type="submit" className="btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Create;
