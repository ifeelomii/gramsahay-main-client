import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Adminspage.css";
import AdminService from "../../services/AdminService";

const ShowAdmin = () => {
  const params = useParams();
  const [userdetails, setUserDetails] = useState({
    adminId: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    emailId: ""
  });

  useEffect(() => {
    console.log("id:" + params.aid);
    AdminService.getAdminById(params.aid)
      .then((result) => {
        console.log(result);
        setUserDetails({ ...result.data });
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }, []);
  return (
    <div>
      <div className="card">
        <div className="info-card-body">
          <h2 className="info-card-title">Admin Information</h2>
          <div id="line"></div>
          <div id="info-card">
            <h4>Admin Id:- </h4>
            <h4> {userdetails.adminId} </h4>
          </div>
          <div id="info-card">
            <h4>First Name:- </h4>
            <h4> {userdetails.firstName} </h4>
          </div>
          <div id="info-card">
            <h4>Last Name:- </h4>
            <h4> {userdetails.lastName} </h4>
          </div>
          <div id="info-card">
            <h4>User Name:- </h4>
            <h4> {userdetails.username} </h4>
          </div>
          <div id="info-card">
            <h4>Phone Number:- </h4>
            <h4> {userdetails.phoneNumber} </h4>
          </div>
          
          <div id="info-seperator"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowAdmin;
