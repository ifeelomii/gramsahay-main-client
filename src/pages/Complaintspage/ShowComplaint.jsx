import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Complaintspage.css";
import ComplaintService from "../../services/ComplaintService";

const ShowComplaint = () => {
  const params = useParams();
  const [complaintdetails, setComplaintDeatils] = useState({
    complaintId: "",
    category: "",
    description: "",
    district: "",
    village: "",
    status: "",
    remarks: ""
  });

  useEffect(() => {
    console.log("id:" + params.cid);
    ComplaintService.getComplaintById(params.cid)
      .then((result) => {
        console.log(result);
        setComplaintDeatils({ ...result.data });
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }, []);
  return (
    <div>
      <div className="card">
        <div className="info-card-body">
          <h2 className="info-card-title">Complaint Information</h2>
          <div id="line"></div>
          <div id="info-card">
            <h4>Complaint Id:- </h4>
            <h4> {complaintdetails.complaintId} </h4>
          </div>
          <div id="info-card">
            <h4>Category:- </h4>
            <h4> {complaintdetails.category} </h4>
          </div>
          <div id="info-card">
            <h4>Description:- </h4>
            <h4 id="desc"> {complaintdetails.description} </h4>
          </div>
          <div id="info-card">
            <h4>District:- </h4>
            <h4> {complaintdetails.district} </h4>
          </div>
          <div id="info-card">
            <h4>Village:- </h4>
            <h4> {complaintdetails.village} </h4>
          </div>
          <div id="info-card">
            <h4>Status:- </h4>
            <h4> {complaintdetails.status.toUpperCase()} </h4>
          </div>
          <div id="info-card">
            <h4>Remarks:- </h4>
            <h4>
              {" "}
              {complaintdetails.remarks ? complaintdetails.remarks : "N/A"}{" "}
            </h4>
          </div>
          <div id="info-seperator"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowComplaint;
