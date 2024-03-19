import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Complaintspage.css";
import moment from "moment";
import ComplaintService from "../../services/ComplaintService";

const AddRemarks = () => {
  const location = useLocation();

  const [formdetails, setformdetails] = useState({
    complaintId: "",
    userId: "",
    category: "",
    description: "",
    status: "",
    remarks: ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    setformdetails({ ...location.state.data });
    console.log("formdetails: " + formdetails);
  }, []);

  const addremark = () => {
    console.log("Form Details : ", formdetails);
    ComplaintService.addRemarks(formdetails)
      .then((result) => {
        console.log(result.data);
        //clear the form
        setformdetails({
          complaintId: "",
          userId: "",
          category: "",
          description: "",
          status: "",
          remarks: ""
        });
        navigate(`/gramsevaks/dashboard`);
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
            <label>Complaint Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="cmp"
              name="complaintId"
              value={formdetails.complaintId}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  complaintId: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>User Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="userId"
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
            <label>Category:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="category"
              name="category"
              value={formdetails.category}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  category: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="description"
              name="description"
              value={formdetails.description}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  description: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group label" id="input-group">
            <label htmlFor="dob">Status:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="status"
              name="status"
              value={formdetails.status}
              onChange={(event) => {
                setformdetails({ ...formdetails, status: event.target.value });
              }}
              readOnly
            />
            <label htmlFor="dob">Remarks:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="remarks"
              name="remarks"
              value={formdetails.remarks}
              onChange={(event) => {
                setformdetails({ ...formdetails, remarks: event.target.value });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            id="input-group"
            onClick={addremark}
          >
            Update Gramsevak
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRemarks;
