import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GramsevakService from "../../services/GramsevakService";
import AllUsers from "../Userpage/AllUsers";
import "./GSpage.css";
import ComplaintService from "../../services/ComplaintService";
import Allcomplaints from "../Complaintspage/Allcomplaints";
import NewComplaints from "../Complaintspage/NewComplaints";
import InProcessComplaints from "../Complaintspage/InProcessComplaints";
import CompletedComplaints from "../Complaintspage/CompletedComplaints";

const GSDashboard = () => {
  const navigate = useNavigate();
  const [gramsevakData, setGramsevakData] = useState({
    gsId: "",
    username: "",
    firstName: "",
    lastName: "",
    status: ""
  });
  const [complaints, setComplaints] = useState({
    complaintId: "",
    userId: "",
    category: "",
    description: "",
    postedAt: "",
    status: "",
    remarks: ""
  });
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showAllComplaints, setShowAllComplaints] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [showInProcess, setShowInProcess] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("valid-gs")) {
      fetchGramsevakData();
      fetchComplaints();
      console.log(gramsevakData);
    } else {
      navigate("/login/gramsevak");
    }
  }, []);

  const fetchGramsevakData = async () => {
    try {
      GramsevakService.getGramsevakByUsername(localStorage.getItem("username"))
        .then((result) => {
          console.log(result);
          setGramsevakData({ ...result.data });
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };
  const fetchComplaints = async () => {
    try {
      ComplaintService.getAllComplaints()
        .then((result) => {
          console.log(result);
          setComplaints({ ...result.data });
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Complaints data:", error);
    }
  };

  const toggleShowAllUsers = () => {
    setShowAllUsers(!showAllUsers);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
  };
  const toggleShowAllComplaints = () => {
    setShowAllUsers(false);
    setShowAllComplaints(!showAllComplaints);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
  };
  const toggleNewComplaints = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(!showNew);
    setShowInProcess(false);
    setShowCompleted(false);
    ComplaintService.getComplaintByStatus("new")
      .then((result) => {
        console.log(result.data);
        setComplaints([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  const toggleInProcessComplaints = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(!showInProcess);
    setShowCompleted(false);
    ComplaintService.getComplaintByStatus("inprocess")
      .then((result) => {
        console.log(result.data);
        setComplaints([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  const toggleCompletedComplaints = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(!showCompleted);
    ComplaintService.getComplaintByStatus("completed")
      .then((result) => {
        console.log(result.data);
        setComplaints([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  const handelLogout = () => {
    // window.location.reload(false);
    localStorage.removeItem("valid-gs");
    navigate(`/login`);
  };

  return (
    <>
      <div id="gs-dashboard-main-container">
        <div id="logout">
          <h1>Gramsevak Dashboard</h1>
          <button
            className="btn btn-danger rounded-pill"
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
        <div id="line"></div>
        <div id="gs-info">
          {/* Display Gramsevak data */}
          {gramsevakData && (
            <>
              <div>
                <h5>Welcome {localStorage.getItem("username")}</h5>
              </div>
              <div>
                <h5>Gramsevak Id :- {gramsevakData.gsId}</h5>
              </div>
              <div>
                <h5>
                  Name:-{" "}
                  {gramsevakData.firstName + " " + gramsevakData.lastName}
                </h5>
              </div>
              <div>
                <h5>Status:- {gramsevakData.status ? "Active" : "Inactive"}</h5>
              </div>
              <hr />
            </>
          )}
        </div>

        <div id="btn-group">
          <button
            onClick={toggleShowAllUsers}
            className="btn btn-secondary rounded-pill"
            id="show-users"
          >
            {showAllUsers ? "Hide All Users" : "Show All Users"}
          </button>
          <button
            onClick={toggleShowAllComplaints}
            className="btn btn-secondary rounded-pill"
            id="show-users"
          >
            {showAllComplaints ? "Hide Complaints" : "Show Complaints"}
          </button>
          <button
            onClick={toggleNewComplaints}
            className="btn btn-secondary rounded-pill"
            id="show-users"
          >
            {showNew ? "Hide New Complaints" : "Show New Complaints"}
          </button>
          <button
            onClick={toggleInProcessComplaints}
            className="btn btn-secondary rounded-pill"
            id="show-users"
          >
            {showInProcess
              ? "Hide In-Process Complaints"
              : "Show In-Process Complaints"}
          </button>
          <button
            onClick={toggleCompletedComplaints}
            className="btn btn-secondary rounded-pill"
            id="show-users"
          >
            {showCompleted
              ? "Hide Completed Complaints"
              : "Show Completed Complaints"}
          </button>
        </div>
        {showAllUsers && (
          <div>
            <h2>All Users</h2>
            <AllUsers />
          </div>
        )}
        {showAllComplaints && (
          <div>
            <h2>All Complaints</h2>
            <Allcomplaints />
          </div>
        )}
        {showNew && (
          <div>
            <h2>New Complaints</h2>
            <NewComplaints />
          </div>
        )}
        {showInProcess && (
          <div>
            <h2>In-Process Complaints</h2>
            <InProcessComplaints />
          </div>
        )}
        {showCompleted && (
          <div>
            <h2>Completed Complaints</h2>
            <CompletedComplaints />
          </div>
        )}
      </div>
    </>
  );
};

export default GSDashboard;
