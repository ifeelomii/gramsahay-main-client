import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Sidepanel.css";
const Sidepanel = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasRightLabel">
            Menu
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <Link to="/" className="sidepanel-nav-menu">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="sidepanel-nav-menu">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="sidepanel-nav-menu">
                Login
              </Link>
            </li>
            {/* <li>
              <Link to="/feedback" className="sidepanel-nav-menu">
                Feedback
              </Link>
            </li> */}
          </ul>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Sidepanel;
