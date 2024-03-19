import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import ComplaintService from "../../services/ComplaintService";
import moment from "moment";

const UserDashboard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    dob: "",
    phoneNumber: "",
    lsComp: ""
  });
  const [complaint, setComplaints] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("valid-user")) {
      fetchUserInfo();
      console.log(complaint);
    }
    else {
      navigate("/login/user");
    }
  }, []);

  const fetchUserInfo = () => {
    try {
      UserService.getUserByUsername(localStorage.getItem("username"))
        .then((result) => {
          setUserInfo({ ...result.data });
          setComplaints([...result.data.lsComp]);
        })
        .catch((err) => {
          console.log("error occured", err);
        });
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };

  const deleteComplaint = (cid) => {
    ComplaintService.deleteComplaint(cid)
      .then((result) => {
        console.log("deleted");
        navigate(`/users/dashboard/${params.username}`);
      })
      .catch((err) => {
        console.log("error" + err);
      });
  };

  const handelLogout = () => {
    // window.location.reload(false);
    // localStorage.setItem("valid-user", false);
    localStorage.removeItem("valid-user");
    navigate(`/login`);
  };

  return (
    <div id="main-container">
      <div id="logout">
        <h1>User Dashboard</h1>
        <button className="btn btn-danger rounded-pill" onClick={handelLogout}>
          Logout
        </button>
      </div>
      <div id="line"></div>
      <div>
        {userInfo && (
          <div id="user-info">
            <p>Username: {userInfo.username}</p>
            <p>User ID: {userInfo.userId}</p>
            <p>First Name: {userInfo.firstName}</p>
            <p>Last Name: {userInfo.lastName}</p>
          </div>
        )}
      </div>
      <div>
        {/* <Allcomplaints/> */}
        {/* {/* <h2>User Complaints</h2> */}
        <Link
          to={`/complaints/addcomplaint/${userInfo.userId}`}
          id="action-comp-btn"
        >
          <button
            type="button"
            name="btn"
            id="action-comp-btn"
            className="btn btn-success"
          >
            {" "}
            Add New Compaint
          </button>
        </Link>
        <Link to={`/feedback`} id="action-comp-btn">
          <button
            type="button"
            name="btn"
            id="action-comp-btn"
            className="btn btn-success"
          >
            {" "}
            Add Feedback
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Complaint Id</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Posted At</th>
              <th scope="col">District</th>
              <th scope="col">Taluka</th>
              <th scope="col">Village</th>
              <th scope="col">Status</th>
              <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "10px"
                }}
              >
                Delete
              </th>
              {/* <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "8px"
                }}
              >
                Edit
              </th> */}
              <th
                scope="col"
                style={{
                  textAlign: "center",
                  width: "8px"
                }}
              >
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {complaint.map((ob) => (
              <tr key={ob.complaintId}>
                <td>{ob.complaintId ? ob.complaintId : "null"}</td>
                <td>{ob.category ? ob.category : "null"}</td>
                <td>{ob.description ? ob.description : "null"}</td>
                <td>
                  {ob.postedAt
                    ? moment(ob.postedAt).format("DD/MM/YYYY HH:mm:ss")
                    : "null"}
                </td>
                <td>{ob.district ? ob.district : "null"}</td>
                <td>{ob.taluka ? ob.taluka : "null"}</td>
                <td>{ob.village ? ob.village : "null"}</td>
                <td>{ob.status ? ob.status : "null"}</td>
                <td>
                  <button
                    type="button"
                    name="btn"
                    id="delete"
                    className="btn btn-danger rounded-pill"
                    onClick={() => {
                      deleteComplaint(ob.complaintId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                {/* <td>
                  <Link
                    to={`/complaints/editcomplaint/${ob.complaintId}`}
                    state={{ data: ob }}
                  >
                    <button
                      type="button"
                      name="btn"
                      id="edit"
                      className="btn btn-primary rounded-pill"
                    >
                      Edit
                    </button>
                  </Link>
                </td> */}
                <td>
                  <Link to={`/complaints/viewcomplaint/${ob.complaintId}`}>
                    <button
                      type="button"
                      name="btn"
                      id="view"
                      className="btn btn-info rounded-pill"
                    >
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;