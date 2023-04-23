import React, { useState } from "react";
import About from "./About";
import AuthNavbar from "./AuthNavbar";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Verify from "./Verify";

const AuthDashboard = () => {
  const [isSelected, setIsSelected] = useState("home");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="h-screen flex flex-col bg-primary-main">
      <AuthNavbar isSelected={isSelected} setIsSelected={setIsSelected} />
      {isSelected == "home" && <Landing />} {isSelected == "login" && <Login />}{" "}
      {isSelected == "register" && (
        <Register setIsSelected={setIsSelected} setUserEmail={setUserEmail} />
      )}
      {isSelected == "about" && <About />}
      {isSelected == "verify" && <Verify userEmail={userEmail} />}
    </div>
  );
};

export default AuthDashboard;
