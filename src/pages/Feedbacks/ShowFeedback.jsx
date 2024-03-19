import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeedbackService from "../../services/FeedbackService";

const ShowFeedback = () => {
  const params = useParams();
  const [formData, setFormData] = useState({
    fId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    subject: "",
    yourMessage: ""
  });

  useEffect(() => {
    console.log("id:" + params.fid);
    FeedbackService.getFeedbackById(params.fid)
      .then((result) => {
        console.log(result);
        setFormData({ ...result.data });
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }, []);
  return (
    <div>
      <div className="card">
        <div className="info-card-body">
          <h2 className="info-card-title">Feedback Information</h2>
          <div id="line"></div>
          <div id="info-card">
            <h4>Feedback Id:- </h4>
            <h4> {formData.fId} </h4>
          </div>
          <div id="info-card">
            <h4>First Name:- </h4>
            <h4> {formData.firstName} </h4>
          </div>
          <div id="info-card">
            <h4>Last Name:- </h4>
            <h4> {formData.lastName} </h4>
          </div>
          <div id="info-card">
            <h4>Subject :- </h4>
            <h4> {formData.subject} </h4>
          </div>
          <div id="info-card">
            <h4>Message:- </h4>
            <h4> {formData.yourMessage} </h4>
          </div>

          <div id="info-seperator"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeedback;
