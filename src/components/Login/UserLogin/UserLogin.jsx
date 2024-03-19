import React, { useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import LoginService from "../../../services/LoginService";

const UserLogin = () => {
  const [formdata, setFormdata] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      LoginService.userLogin(formdata)
        .then((result) => {
          setErrorMessage("");
          console.log("Login successful");
          setErrorMessage("");
          localStorage.setItem("valid-user", true);
          localStorage.setItem("username", formdata.username);
          navigate(`/users/dashboard/${formdata.username}`);
        })
        .catch((err) => {
          setErrorMessage("Invalid login Credentials. Please try again.");
          console.log("error occured", err);
        });
    } catch (error) {
      setErrorMessage("Failed to Login. Please try again." + error);
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
      <div className="user-login-container">
        <h2>User Login</h2>
        {errorMessage && (
          <p className="admin-login-error-message">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formdata.username}
              onChange={handleChange}
              required
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
              required
            />
          </div>
          <button type="submit" id="submit">
            Login
          </button>
        </form>
        <div>
          Not a user?{" "}
          <Link to="/users/adduser" id="user-register">
            Register Now !
          </Link>
        </div>
      </div>
      <div id="bottom-seperator"></div>
    </>
  );
};

export default UserLogin;
