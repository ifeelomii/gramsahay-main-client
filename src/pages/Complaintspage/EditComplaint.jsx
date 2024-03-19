import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Complaintspage.css";
import moment from "moment";
import ComplaintService from "../../services/ComplaintService";
import UserService from "../../services/UserService";
import emailjs from "@emailjs/browser";

const EditComplaint = () => {
  const form = useRef();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: ""
  });
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [formdetails, setformdetails] = useState({
    complaintId: "",
    userId: "",
    category: "",
    description: "",
    postedAt: "",
    forAdmin: "",
    district: "",
    taluka: "",
    village: "",
    status: ""
  });

  useEffect(() => {
    setformdetails({ ...location.state.data });
    let id = location.state.data.userId;
    // console.log(id);
    fetchdata(id);
    // console.log("formdetails: " + formdetails);
  }, []);

  const fetchdata = (id) => {
    UserService.getUserById(id)
      .then((response) => {
        console.log(response.data.emailId);
        // setUser({ emailId: response.data.emailId });
        setUser(response.data);
      })
      .catch((error) => {
        alert(`Error! ${error.message}`);
      });
  };

  const sendEmail = (e) => {
    // emailjs
    //   .sendForm("service_5lte1ep", "template_iqsioqe", form.current, {
    //     publicKey: "7jsJ0mN4RfOmhmwri",
    //     to_email: user.emailId
    //   })
    var templateParams = {
      from_name:'GramSahay',
      to_email: user.emailId,
      name: user.firstName,
      subject: formdetails.category,
      status: formdetails.status
    };

      emailjs
        .send(
          "service_5lte1ep",
          "template_iqsioqe",
          templateParams,
          "7jsJ0mN4RfOmhmwri"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };

  const updategs = () => {
    console.log("Form Details : ", formdetails);
    ComplaintService.updateComplaint(formdetails)
      .then((result) => {
        console.log(result.data);
        if (
          formdetails.status === "inprocess" ||
          formdetails.status === "completed"
        ) {
          sendEmail();
        }
        //clear the form
        setformdetails({
          complaintId: "",
          userId: "",
          category: "",
          description: "",
          postedAt: "",
          forAdmin: "",
          district: "",
          taluka: "",
          village: "",
          status: ""
        });
        navigate(`/gramsevaks/dashboard/${params.username}`);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  return (
    <div className="outer-edit-gs-container">
      <div className="inner-edit-gs-container">
        <form ref={form}>
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
            <label>Email Id:</label>
            <input
              type="email"
              className="form-control col-md-12"
              id="emailId"
              value={user.emailId}
              onChange={(event) => {
                setUser({
                  ...user,
                  emailId: event.target.value
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
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Posted At:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="postedAt"
              name="postedAt"
              value={moment(formdetails.postedAt).format("DD/MM/YYYY hh:mm:ss")}
              // value={moment(formdetails.postedAt).format("DD/MM/YYYY")}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  postedAt: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            {/* <label>For Admin:</label> */}
            <input
              type="text"
              className="form-control col-md-12"
              id="forAdmin"
              name="forAdmin"
              value={formdetails.forAdmin}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  forAdmin: event.target.value
                });
              }}
              hidden
            />
          </div>
          <div className="form-group label" id="input-group">
            <label>District:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="district"
              name="district"
              value={formdetails.district}
              pattern="^[0-9]*$"
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  district: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label>Taluka:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="taluka"
              name="taluka"
              value={formdetails.taluka}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  taluka: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label>Village:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="village"
              name="village"
              value={formdetails.village}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  village: event.target.value
                });
              }}
            />
          </div>
          {/* <div className="form-group label" id="input-group">
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
            />
          </div> */}
          <div className="form-group label" id="input-group">
            <label htmlFor="status">Status:</label>
            <select
              className="form-control col-md-12"
              id="status"
              name="status"
              value={formdetails.status}
              onChange={(event) => {
                setformdetails({ ...formdetails, status: event.target.value });
              }}
            >
              <option value="new">New</option>
              <option value="inprocess">In-Process</option>
              <option value="completed">Completed</option>
            </select>
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

export default EditComplaint;
