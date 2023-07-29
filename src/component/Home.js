import "./Home.css";
import { useState, useEffect } from "react";
function Home() {
  let [data, setData] = useState([]);
  let [data1, setData1] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  let b = data.length - 1;
  let c = b + 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        setData1(resp);
      });
    });
  }, []);

  let d = data1.length - 1;
  let e = d + 1;

  return (
    <div className="body">
      <h1 className="home" style={{ fontSize: "60px" }}>
        Home Page
      </h1>
      <hr style={{ color: "white" }} />
      <div className="main">
        <div className="teacher">
          <h1 style={{ color: "white", fontSize: "50px" }}>Teachers</h1>
          <h1 style={{ color: "white", fontSize: "50px" }}>{c}</h1>
        </div>
        <div className="line"></div>
        <div className="student">
          <h1 style={{ color: "white", fontSize: "50px" }}>Students</h1>
          <h1 style={{ color: "white", fontSize: "50px" }}>{e}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
