import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => {
            console.log(student)
            return (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Replace</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
