// AdminLogin.js
import React, { useEffect, useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";
import LoginService from "../../../services/LoginService";

const AdminLogin = () => {

  const [formdata, setFormdata] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      LoginService.adminLogin(formdata)
        .then((result) => {
          setErrorMessage("");
          console.log("Login successful");
          localStorage.setItem("valid-admin", true);
          localStorage.setItem("username", formdata.username);
          setErrorMessage("");
          navigate(`/admins/dashboard/${formdata.username}`);
        })
        .catch((err) => {
          console.log("error occured", err);
          setErrorMessage("Invalid login credentials.");
        });
    } catch (error) {
      setErrorMessage("Failed to Login. Please try again.");
      console.error("Error Logging in:", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <>
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        {errorMessage && (
          <p className="admin-login-error-message">{errorMessage}</p>
        )}
        <form onSubmit={handleLogin}>
          <div id="admin-login-form">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formdata.username}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formdata.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary" id="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <div id="admin-bottom-seperator"></div>
    </>
  );
};

export default AdminLogin;
