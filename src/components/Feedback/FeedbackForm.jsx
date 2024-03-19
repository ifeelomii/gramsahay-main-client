import { useState } from "react";
import "./FeedbackForm.css";
import FeedbackService from "../../services/FeedbackService";
// import { useNavigate, useHistory } from "react-router-dom";
const FeedbackForm = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    subject: "",
    yourMessage: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      FeedbackService.addFeedback(formData)
        .then((result) => {
          setSuccess(true);
          setError("");
          setFormData({
            fId: "",
            firstName: "",
            lastName: "",
            emailId: "",
            subject: "",
            yourMessage: ""
          });
        })
        .catch((err) => {
          setError("Something went wrong. Please try again.")
          console.log("error" + err);
        });
    } catch (error) {
      setError("Failed to register user. Please try again.");
      console.error("Error registering user:", error);
    }
    console.log(formData);
  }
  return (
    <>
      <section className="section section-contact">
        <div className="container form-container">
          <h2 className="feedback-txt">Feedback</h2>
          <p className="feedback-txt">Your feedback is valuable for us... </p>
        </div>

        <div className="contact-container-outer">
          <div className="section-contact-main contact-container-inner">
            <div id="complaint-reg">
              {/* Display error if any */}
              {error && <p style={{ color: "red" }}>{error}</p>}

              {/* Show success message on successful registration */}
              {success && (
                <p style={{ color: "green" }}>
                  Feedback registered successfully!
                </p>
              )}
            </div>
            <form action="#" on onSubmit={handelSubmit}>
              <ul className="form-style-1">
                <li>
                  <label>
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handelChange}
                    className="field-divided"
                    placeholder="First"
                    required
                  />{" "}
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handelChange}
                    className="field-divided"
                    placeholder="Last"
                    required
                  />
                </li>
                <li>
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="emailId"
                    name="emailId"
                    id="emailId"
                    value={formData.emailId}
                    onChange={handelChange}
                    className="field-long"
                    required
                  />
                </li>
                <li>
                  <label>
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handelChange}
                    className="field-select"
                    required
                  />
                </li>
                <li>
                  <label>
                    Your Message <span className="required">*</span>
                  </label>
                  <textarea
                    name="yourMessage"
                    id="yourMessage"
                    value={formData.yourMessage}
                    onChange={handelChange}
                    className="field-long field-textarea"
                    required
                  ></textarea>
                </li>
                <li>
                  <button
                    className="btn btn-primary rounded-pill"
                    id="fb-sbt-btn"
                  >
                    Submit Feedback
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeedbackForm;
