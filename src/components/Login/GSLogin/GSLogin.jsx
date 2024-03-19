// GramsevakLogin.js
import React, { useState } from "react";
import "./GSLogin.css";
import { useNavigate } from "react-router-dom";
import LoginService from "../../../services/LoginService";

const GSLogin = () => {
  const [formdata, setFormdata] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      LoginService.gramsevakLogin(formdata)
        .then((result) => {
          setErrorMessage("");
          console.log("Login successful");
          localStorage.setItem("valid-gs", true);
          localStorage.setItem("username", formdata.username);
          setErrorMessage("");
          navigate(`/gramsevaks/dashboard/${formdata.username}`);
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
      <div className="gramsevak-login-container">
        {errorMessage && (
          <div className="gramsevak-login-error-message">{errorMessage}</div>
        )}
        <h2>Gramsevak Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formdata.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={FormData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" id="submit">
            Login
          </button>
        </form>
      </div>
      <div id="bottom-seperator"></div>
    </>
  );
};

export default GSLogin;
