import { useState } from "react";
import "./ComplaintRegistration.css";
import axios from "axios";
import ComplaintService from "../../services/ComplaintService";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const ComplaintRegistration = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    username:"",
    userid: `${params.id}`,
    category: "",
    description: "",
    forGS: "1", //for GS or not
    forAdmin: "0", //for Admin or not
    status: "new",
    state: "Maharashtra",
    district: "",
    taluka: "",
    village: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      ComplaintService.addComplaint(formData);
      setSuccess(true);
      setError("");
      setFormData({
        username: "",
        userid: `${params.id}`,
        category: "",
        description: "",
        forGS: "1", //for GS or not
        forAdmin: "0", //for Admin or not
        status: "new",
        state: "Maharashtra",
        district: "",
        taluka: "",
        village: ""
      });
    } catch (error) {
      setError("Failed to register user. Please try again.");
      console.error("Error registering user:", error);
    }
    console.log(formData);
  };

  return (
    <div id="main-complaint-reg-div">
      <h2 id="complaint-reg">Complaint Registration</h2>
      <div id="complaint-reg">
        {/* Display error if any */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show success message on successful registration */}
        {success && (
          <p style={{ color: "green" }}>Complaint registered successfully!</p>
        )}
      </div>
      <form onSubmit={handleSubmit} id="user-reg-form">
        {/* UserID is Auto Generated */}

        <div id="line"></div>
        <div id="input-group">
          <label>
            Category <span id="req-symbol">*</span>:
            <select
              name="category"
              className="col-md-12"
              value={formData.category}
              onChange={handleChange}
              placeholder="Select Category"
              required
            >
              <option value="">Select an option</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="sanitation">Sanitation</option>
              <option value="electricity">Electricity</option>
              <option value="water">Water</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            For GramSevak <span id="req-symbol">*</span>:
            <select
              name="forGS"
              className="col-md-12"
              value={formData.forGS}
              onChange={handleChange}
              placeholder="Select Authority"
              aria-readonly
              required
            >
              <option value="1">Gramsevak</option>
            </select>
          </label>
          <label>
            Status <span id="req-symbol">*</span>:
            <select
              name="status"
              className="col-md-12"
              value={formData.status}
              onChange={handleChange}
              placeholder="Select Authority"
              aria-readonly
              required
            >
              <option value="1">New Complaint</option>
            </select>
          </label>
          <label>
            User ID <span id="req-symbol">*</span>:
            <input
              type="number"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              placeholder="Enter User ID"
              className="col-md-12"
              required
            />
          </label>
        </div>
        <div id="input-group">
          <label>
            Description <span id="req-symbol">*</span>:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe Your Complaint..."
              className="col-md-12"
              required
            />
          </label>
        </div>
        <div id="line"></div>
        <div id="input-group">
          <label>
            State <span id="req-symbol">*</span>:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter Your State"
              className="col-md-12"
              required
            />
          </label>
          <label>
            District <span id="req-symbol">*</span>:
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter Your District"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Taluka <span id="req-symbol">*</span>:
            <input
              type="text"
              name="taluka"
              value={formData.taluka}
              onChange={handleChange}
              placeholder="Enter Your Taluka"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Village <span id="req-symbol">*</span>:
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              placeholder="Enter Your Village"
              className="col-md-12"
              required
            />
          </label>
        </div>
      
        <div id="last-line"></div>

        <div id="btn-group">
          <button type="submit" id="submit">
            Register
          </button>

          <button type="reset" id="reset">
            Reset
          </button>
        </div>
        <div id="seperator"></div>
      </form>
    </div>
  );
};

export default ComplaintRegistration;
