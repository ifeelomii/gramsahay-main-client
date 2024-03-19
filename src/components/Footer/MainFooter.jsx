import React from "react";
import "./MainFooter.css";
import { Link } from "react-router-dom";
const MainFooter = () => {
  return (
    <>
      <footer className="section-footer section main-footer">
        <div className="container grid grid-four-column main-footer">
          <div className="f-about center">
            <h3>About</h3>
            <p id="mr-lf">
              GramSahay is an online grievance redressal portal aimed at serving
              a bridge between the village people and the local administration,
              particularly the Gramsevak, to address their concerns effectively.
            </p>
            <p>
              <div className="sub-footer-copyright" id="mr-lf">
                &copy;2024 GramSahay.
              </div>
              <div className="sub-footer-rights" id="mr-lf">
                All rights reserved.
              </div>
            </p>
          </div>
          <div className="f-links center" id="align-it">
            <h3>Pages</h3>
            <ul>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/" id="mr-lf">
                  HOME
                </Link>
              </li>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/about" id="mr-lf">
                  About
                </Link>
              </li>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/login" id="mr-lf">
                  Login
                </Link>
              </li>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/feedback" id="mr-lf">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div className="f-achievements center" id="align-it">
            <h3>Redirects</h3>
            <ul>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/login/admin" id="mr-lf">
                  Admin
                </Link>
              </li>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/login/gramsevak" id="mr-lf">
                  Gramsevak
                </Link>
              </li>
              <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/login/user" id="mr-lf">
                  User
                </Link>
              </li>
              {/* <li>
                <span>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <Link to="/achievement.html">Feedback</Link>
              </li> */}
            </ul>
          </div>

          <div className="f-address center">
            <h3>Contact Us</h3>
            <div id="contact">
              <p>
                <span>
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                <Link
                  target="_blank"
                  id="mr-lf"
                >
                  Pune, India
                </Link>
              </p>
            </div>
            <div id="contact">
              <p>
                <span>
                  <ion-icon name="call-sharp"></ion-icon>
                </span>
                <Link to="tel:+919561466648" target="_blank" id="mr-lf">
                  Phone Number
                </Link>
              </p>
            </div>
            <div id="contact">
              <p>
                <span>
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <Link to="mailto:omkarware003@gmail.com" target="_blank" id="mr-lf">
                  E-Mail
                </Link>
              </p>
            </div>
            <div id="contact">
              <p>
                <span>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <Link
                  to="https://www.linkedin.com/in/gramsahay/"
                  target="_blank"
                  id="mr-lf"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { MainFooter };
