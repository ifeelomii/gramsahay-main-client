import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import "./Userpage.css";
const EditUser = () => {
  const location = useLocation();

  const [formdetails, setformdetails] = useState({
    userId:"",
    firstName: "",
    lastName: "",
    emailId: "",
    dob: "",
    phoneNumber: ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    setformdetails({ ...location.state.userdata });
    console.log(formdetails)
  }, []);
  const updateuser = () => {
    console.log("Form Details : ", formdetails);
    // UserService.updateUser(formdetails)
    //   .then((result) => {
    //     console.log(result.data);
    //     //clear the form
    //     setformdetails({
    //       userID:"",
    //       fname: "",
    //       lname: "",
    //       email: "",
    //       dob: "",
    //       phone_number: ""
    //     });
    //     navigate("/users/alluserdetails/:username");
    //   })
    //   .catch((err) => {
    //     console.log("error occured", err);
    //   });
  };

  return (
    <div className="outer-edit-user-container">
      <div className="inner-edit-user-container">
        <form>
          <div className="form-group" id="input-group">
            <label>User Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="uid"
              name="userId"
              value={formdetails.userId}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  userId: event.target.value
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
            <label htmlFor="dob">Date Of Birth:</label>
            <input
              type="date"
              className="form-control col-md-12"
              id="dob"
              name="dob"
              value={formdetails.dob}
              onChange={(event) => {
                setformdetails({ ...formdetails, dob: event.target.value });
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
            onClick={updateuser}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
