// import { MainFooter } from "../Footer/MainFooter";
import "./LoginSection.css";
const { Link, useNavigate } = require("react-router-dom");


const LoginSection = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   console.log("hiiiii");
  //   navigate("/login/user");
  // };
  return (
    <>
      <div className="main-container">
        <h2 className="header">Login Section</h2>
        <section className="box-section">
          <div className="box-container" id="featured">
            <div className="box box-1">
              <div className="icon">01</div>
              <div className="content">
                <h2>Admin</h2>
                <p></p>
                <div className="image-wrapper">
                  <img
                    className="bg-img"
                    src="/images/admin.gif"
                    id="admin-img"
                    alt="adminimage"
                  />
                </div>
                <Link to="/login/admin" id="login-btn">
                  Login
                  <img
                    id="login-img"
                    src="/images/login.gif"
                    alt="login gif"
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="box">
              <div className="icon">02</div>
              <div className="content">
                <h2>Gramsevak</h2>
                <p></p>
                <div>
                  <img
                    className="bg-img"
                    src="/images/gs.gif"
                    id="gs-img"
                    alt="gsimage"
                  />
                </div>
                <Link to="/login/gramsevak" id="login-btn">
                  Login{" "}
                  <img id="login-img" src="/images/login.gif" alt="login gif" />{" "}
                </Link>
              </div>
            </div>

            <div className="box">
              <div className="icon">03</div>
              <div className="content">
                <h2>User</h2>
                <p></p>
                <div>
                  <img
                    className="bg-img"
                    id="user-img"
                    src="/images/user.gif"
                    alt="userimage"
                  />
                </div>
                <Link to="/login/user" id="login-btn">
                  Login{" "}
                  <img id="login-img" src="/images/login.gif" alt="login gif" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default LoginSection;
