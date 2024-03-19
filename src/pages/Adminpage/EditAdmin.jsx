import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Adminspage.css";
import AdminService from "../../services/AdminService";

const EditAdmin = () => {
  const location = useLocation();

  const [formdetails, setformdetails] = useState({
    adminId: "",
    username: "",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    setformdetails({ ...location.state.admindata });
    console.log(formdetails);
  }, []);

  const updateadmin = () => {
    console.log("Form Details : ", formdetails);
    AdminService.updateAdmin(formdetails)
      .then((result) => {
          console.log(formdetails.username);
          let un = formdetails.username;
        //clear the form
        setformdetails({
          adminId: "",
          username: "",
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNumber: ""
        });
        const nav = localStorage.getItem("adminusername");
        navigate(`/admins/dashboard/${nav}`);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  return (
    <div className="outer-edit-gs-container">
      <div className="inner-edit-gs-container">
        <form>
          <div className="form-group" id="input-group">
            <label>Admin Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="adminId"
              name="adminId"
              value={formdetails.adminId}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  adminId: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="fname"
              name="firstname"
              value={formdetails.firstName}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  firstName: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="lname"
              name="lastname"
              value={formdetails.lastName}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  lastName: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Email Id:</label>
            <input
              type="email"
              className="form-control col-md-12"
              id="email"
              name="email"
              value={formdetails.emailId}
              onChange={(event) => {
                setformdetails({ ...formdetails, emailId: event.target.value });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="number"
              className="form-control col-md-12"
              id="phoneNumber"
              name="phoneNumber"
              value={formdetails.phoneNumber}
              pattern="^[0-9]*$"
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  phoneNumber: event.target.value
                });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            id="input-group"
            onClick={updateadmin}
          >
            Update Gramsevak
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAdmin;
