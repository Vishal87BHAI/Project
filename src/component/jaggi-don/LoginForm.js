import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Home from "./Home";

const LoginForm = () => {
  const username = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [alert, setAlert] = useState(null);

  const localSign = localStorage.getItem("username");

  useEffect(() => {
    if (localSign) {
      setShowHome(true);
    }
  }, [localSign]);

  // useEffect for automatically close the notification after clicked on submit
  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    },5000);
  }, [alert]);

  const handleClick = (e) => {
    e.preventDefault();
    if (username.current.value && password.current.value) {
      localStorage.setItem("username", username.current.value);
      localStorage.setItem("password", password.current.value);
      setAlert("success");
    } else {
      setAlert("danger");
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      {alert && (
        <Alert
          style={{
            position: "absolute",
            top: "0px",
            right: "5px",
            zIndex: "9999",
            width: "30%"
          }}
          variant={alert}
          dismissible
          onClose={() => setAlert(null)}
        >
          {alert == "success"
            ? "Account created successfully"
            : "Please fill the all fields"}
        </Alert>
      )}
      <br />
      <div className="App">
        {showHome ? (
          <Home />
        ) : (
          <Form>
            <input type="text" placeholder="Username" ref={username} />
            <br />
            <br />

            <input type="password" placeholder="Password" ref={password} />
            <br />
            <br />

            <Button variant={"outline-primary"} onClick={(e) => handleClick(e)}>
              Submit
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
