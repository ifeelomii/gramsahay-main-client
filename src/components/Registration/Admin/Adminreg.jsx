import React, { useState } from "react";
import "./Adminreg.css";
import AdminService from "../../../services/AdminService";
import { useNavigate } from "react-router-dom";

const AdminRegistrationForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username !== formData.password) {
      try {
        AdminService.addAdmin(formData);
        setSuccess(true);
        setError("");
      } catch (error) {
        setError("Failed to register user. Please try again.");
        console.error("Error registering user:", error);
      }
    } else {
      setError("Username and Password must be different!");
    }
    console.log(formData);
  };

  const resetForm = () => {
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      emailId: "",
      phoneNumber: ""
    });
  };

  const goback = () => {
    const nav = localStorage.getItem("adminusername");
    navigate(`/admins/dashboard/${nav}`);
  }
  return (
    <div id="main-admin-reg-div">
      <h2 id="admin-reg">Admin Registration</h2>
      <div id="complaint-reg">
        {/* Display error if any */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show success message on successful registration */}
        {success && (
          <p style={{ color: "green" }}>Admin registered successfully!</p>
        )}
      </div>
      <form onSubmit={handleSubmit} id="admin-reg-form">
        {/* UserID is Auto Generated */}

        <div id="line"></div>
        <h3 id="admin-reg-header">Personal Information</h3>
        <hr />
        <div id="input-group">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Select A User Name"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="col-md-12"
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              required
            />
          </label>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter Your First Name"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Your Last Name"
              className="col-md-12"
              required
            />
          </label>
        </div>
        <div id="input-group">
          <label>
            Email Address:
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Enter Your Email Id"
              className="col-md-12"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Your Number"
              className="col-md-12"
              title="Please enter only numbers"
              max={10000000000}
              required
            />
          </label>
        </div>
        <div id="last-line"></div>
        <div id="btn-group">
          <button type="submit" id="submit">
            Register
          </button>

          <button type="reset" id="reset" onClick={resetForm}>
            Reset
          </button>

          <button type="button" id="back" onClick={goback}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminRegistrationForm;
