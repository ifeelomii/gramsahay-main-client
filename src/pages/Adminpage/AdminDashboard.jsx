import React, { useState, useEffect } from "react";
import AllUsers from "../Userpage/AllUsers";
import "./Adminspage.css";
import ComplaintService from "../../services/ComplaintService";
import Allcomplaints from "../Complaintspage/Allcomplaints";
import NewComplaints from "../Complaintspage/NewComplaints";
import InProcessComplaints from "../Complaintspage/InProcessComplaints";
import CompletedComplaints from "../Complaintspage/CompletedComplaints";
import AdminService from "../../services/AdminService";
import AllGS from "../GSpage/AllGS";
import AllAdmins from "./AllAdmins";
import AllFeedbacks from "../Feedbacks/AllFeedbacks";
import { useNavigate } from "react-router-dom";
import LatestComplaints from "../Complaintspage/LatestComplaints";

const GSDashboard = () => {
  var newcomp;
  var ipcomp;
  var completedcomp;

  const navigate = useNavigate();

  const [adminData, setAdminData] = useState({
    adminId: "",
    username: "",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: ""
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

  const [newc, setNewc] = useState(0);
  const [ip, setIP] = useState(0);
  const [comp, setComp] = useState(0);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showAllComplaints, setShowAllComplaints] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [showInProcess, setShowInProcess] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showGS, setShowGS] = useState(false);
  const [showAdmin, setShowAdmins] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showLatest, setShowLatest] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("valid-admin")) {
      fetchAdminData();
      fetchComplaints();
      fetchNew();
      fetchInProcess();
      fetchCompleted();
    } else {
      navigate("/login");
    }
  }, []);

  // GET GS DATA
  const fetchAdminData = async () => {
    try {
      AdminService.getAdminByUsername(localStorage.getItem("username"))
        .then((result) => {
          setAdminData({ ...result.data });
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };

  // GET COMPLAINTS DATA
  const fetchComplaints = async () => {
    try {
      ComplaintService.getAllComplaints()
        .then((result) => {
          //   console.log(result);
          setComplaints({ ...result.data });
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Complaints data:", error);
    }
  };

  // GET NEW COMPLAINTS COUNT
  const fetchNew = async () => {
    // console.log("new");
    try {
      ComplaintService.getComplaintCount("new")
        .then((result) => {
          //   console.log(result);
          newcomp = result.data;
          setNewc(newcomp);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };

  // GET IN-PROCESS COMPLAINTS COUNT
  const fetchInProcess = async () => {
    // console.log("ip");
    try {
      ComplaintService.getComplaintCount("inprocess")
        .then((result) => {
          ipcomp = result.data;
          setIP(ipcomp);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };

  // GET COMPLETED COMPLAINTS COUNT
  const fetchCompleted = async () => {
    // console.log("completed");
    try {
      ComplaintService.getComplaintCount("completed")
        .then((result) => {
          completedcomp = result.data;
          setComp(completedcomp);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching Gramsevak data:", error);
    }
  };

  const toggleShowAllUsers = () => {
    setShowAllUsers(!showAllUsers);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(false);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(false);
  };
  const toggleShowAllComplaints = () => {
    setShowAllUsers(false);
    setShowAllComplaints(!showAllComplaints);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(false);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(false);
  };
  const toggleNewComplaints = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(!showNew);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(false);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(false);

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
    setShowGS(false);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(false);

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
    setShowGS(false);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(false);
    ComplaintService.getComplaintByStatus("completed")
      .then((result) => {
        console.log(result.data);
        setComplaints([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  const toggleShowGS = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(!showGS);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(false);
  };
  const toggleShowAdmin = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(false);
    setShowFeedback(false);
    setShowAdmins(!showAdmin);
    setShowLatest(false);
  };
  const toggleShowFeedback = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(false);
    setShowFeedback(false);
    setShowAdmins(false);
    setShowFeedback(!showFeedback);
    setShowLatest(false);
  };

  const toggleShowLatest = () => {
    setShowAllUsers(false);
    setShowAllComplaints(false);
    setShowNew(false);
    setShowInProcess(false);
    setShowCompleted(false);
    setShowGS(false);
    setShowFeedback(false);
    setShowAdmins(false);
    setShowFeedback(false);
    setShowLatest(!showLatest);
  };

  const handelLogout = () => {
    // window.location.reload(false);
    localStorage.removeItem("valid-admin");
    navigate(`/login`);
  };

  return (
    <>
      <div id="gs-dashboard-main-container">
        <div id="logout">
          <h1>Admin Dashboard</h1>
          <button
            className="btn btn-danger rounded-pill"
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
        <div id="line"></div>
        <div id="admin-info">
          {adminData && (
            <>
              <div>
                <h5>Welcome {localStorage.getItem("username")}</h5>
              </div>
              <div>
                <h5>User id :- {adminData.adminId}</h5>
              </div>
              <div>
                <h5>
                  Full Name:- {adminData.firstName + " " + adminData.lastName}
                </h5>
              </div>
              <div>
                <h5>Email Id:- {adminData.emailId}</h5>
              </div>
              <hr />
            </>
          )}
        </div>

        <div id="count-cards">
          <div id="new-comps">
            New Complaints <span>{newc}</span>{" "}
          </div>
          <div id="inprocess-comps">
            In-Process Complaints <span>{ip}</span>
          </div>
          <div id="completed-comps">
            Completed Complaints <span>{comp}</span>
          </div>
        </div>
        <div id="btn-group">
          <button
            onClick={toggleShowAllUsers}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showAllUsers ? "Hide All Users" : "Show All Users"}
          </button>
          <button
            onClick={toggleShowAllComplaints}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showAllComplaints ? "Hide Complaints" : "Show Complaints"}
          </button>
          <button
            onClick={toggleNewComplaints}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showNew ? "New Complaints" : "New Complaints"}
          </button>
          <button
            onClick={toggleInProcessComplaints}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showInProcess ? "In-Process Complaints" : "In-Process Complaints"}
          </button>
          <button
            onClick={toggleCompletedComplaints}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showCompleted ? "Completed Complaints" : "Completed Complaints"}
          </button>
        </div>
        <div id="btn-group">
          <button
            onClick={toggleShowGS}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showGS ? "Hide Gramsevaks" : "All Gramsevaks"}
          </button>
          <button
            onClick={toggleShowAdmin}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showAdmin ? "Hide Admins" : "All Admins"}
          </button>
          <button
            onClick={toggleShowFeedback}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showFeedback ? "Hide Feedbacks" : "All Feedbacks"}
          </button>
          <button
            onClick={toggleShowLatest}
            className="btn btn-secondary rounded-pill"
            id="show"
          >
            {showLatest ? "Hide Latest" : "Latest Complaints"}
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
        {showGS && (
          <div>
            <h2>All Gramsevaks</h2>
            <AllGS />
          </div>
        )}
        {showAdmin && (
          <div>
            <h2>All Admins</h2>
            <AllAdmins />
          </div>
        )}
        {showFeedback && (
          <div>
            <h2>All Feedbacks</h2>
            <AllFeedbacks />
          </div>
        )}
        {showLatest && (
          <div>
            <h2>Latest Complaints</h2>
            <LatestComplaints />
          </div>
        )}
      </div>
    </>
  );
};

export default GSDashboard;
