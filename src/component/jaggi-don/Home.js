import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <p>WELCOME TO HOMEPAGE</p>
      <Button className="me-2" onClick={logout}>
        logout
      </Button>
      <Button onClick={deleteAccount}>Delete account</Button> <br /><br />
    </div>
  );
};

export default Home;
