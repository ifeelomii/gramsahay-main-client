import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GSpage.css";
import GramsevakService from "../../services/GramsevakService";

const ShowGS = () => {
  const params = useParams();
  const [userdetails, setUserDetails] = useState({
    gsId: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    district: "",
    village: "",
    status: ""
  });

  useEffect(() => {
    console.log("id:" + params.uid);
    GramsevakService.getGramsevakById(params.uid)
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
          <h2 className="info-card-title">Gramsevak Information</h2>
          <div id="line"></div>
          <div id="info-card">
            <h4>Gramsevak Id:- </h4>
            <h4> {userdetails.gsId} </h4>
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
          <div id="info-card">
            <h4>District:- </h4>
            <h4> {userdetails.district} </h4>
          </div>
          <div id="info-card">
            <h4>Village:- </h4>
            <h4> {userdetails.village} </h4>
          </div>
          <div id="info-card">
            <h4>Status:- </h4>
            <h4> {userdetails.status?"Available":"Unavailable"} </h4>
          </div>
          <div id="info-seperator"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowGS;
