import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GSpage.css";
import GramsevakService from "../../services/GramsevakService";

const EditGS = () => {
  const location = useLocation();

  const [formdetails, setformdetails] = useState({
    gsId: "",
    username:"",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    status: ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    setformdetails({ ...location.state.gsdata });
    console.log(formdetails);
  }, []);

  const updategs = () => {
    console.log("Form Details : ", formdetails);
        GramsevakService.updateGramsevak(formdetails)
          .then((result) => {
            console.log(result.data);
            let un = formdetails.username;
            //clear the form
            setformdetails({
              gsIdID: "",
              username: "",
              fname: "",
              lname: "",
              email: "",
              phone_number: "",
              status: ""
            });
            navigate(`/gramsevaks/allgramsevaks/${un}`);
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
            <label>Gramsevak Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="gsId"
              name="gsId"
              value={formdetails.gsId}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  gsId: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>User Name:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="username"
              name="username,"
              value={formdetails.username}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  username: event.target.value
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
          <div className="form-group label" id="input-group">
            <label htmlFor="dob">Status:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="status"
              name="status"
              value={formdetails.status ? "Available" : "Unavailable"}
              onChange={(event) => {
                setformdetails({ ...formdetails, status: event.target.value });
              }}
              readOnly
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            id="input-group"
            onClick={updategs}
          >
            Update Gramsevak
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGS;
