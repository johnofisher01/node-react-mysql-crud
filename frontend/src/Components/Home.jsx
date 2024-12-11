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
            return (
              <tr key={index}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
