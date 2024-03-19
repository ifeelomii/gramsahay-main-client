import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landingpage from "./pages/Landingpage/Landingpage";
import About from "./components/About/About";
import { MainFooter } from "./components/Footer/MainFooter";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import GSLogin from "./components/Login/GSLogin/GSLogin";
import UserLogin from "./components/Login/UserLogin/UserLogin";
import Feedback from "./components/Feedback/Feedback";
import ComplaintRegistration from "./components/Complaint/ComplaintRegistration";
import LoginSection from "./components/LoginSection/LoginSection";
import AdminDashboard from "./pages/Adminpage/AdminDashboard";
import AllUsers from "./pages/Userpage/AllUsers";
import AllGS from "./pages/GSpage/AllGS";
import AllComplaints from "./pages/Complaintspage/Allcomplaints";
import AllAdmins from "./pages/Adminpage/AllAdmins";
import Showuser from "./pages/Userpage/ShowUser";
import AddUser from "./pages/Userpage/AddUser";
import EditUser from "./pages/Userpage/EditUser";
import AddGS from "./pages/GSpage/AddGS";
import AddAdmin from "./pages/Adminpage/AddAdmin";
import EditGS from "./pages/GSpage/EditGS";
import ShowGS from "./pages/GSpage/ShowGS";
import ShowAdmin from "./pages/Adminpage/ShowAdmin";
import EditAdmin from "./pages/Adminpage/EditAdmin";
import ShowComplaint from "./pages/Complaintspage/ShowComplaint";
import AddComplaint from "./pages/Complaintspage/AddComplaint";
import EditComplaint from "./pages/Complaintspage/EditComplaint";
import AddRemarks from "./pages/Complaintspage/AddRemarks";
import UserDashboard from "./pages/Userpage/UserDashboard";
import GSDashboard from "./pages/GSpage/GSDashBoard";
import ShowFeedback from "./pages/Feedbacks/ShowFeedback";
import { useEffect } from "react";
// import FeedbackForm from "./components/Feedback/FeedbackForm";
function App() {
  useEffect(() => {
    localStorage.removeItem("valid-gs");
    localStorage.removeItem("valid-admin");
    localStorage.removeItem("valid-user");
  },[])
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route
            path="/feedback/viewfeedback/:fid"
            element={<ShowFeedback />}
          />
          {/* USER PATHS */}
          <Route path="/users/adduser" element={<AddUser />} />
          <Route path="/users/edituser/:id" element={<EditUser />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route
            path="/users/dashboard/:username"
            element={<UserDashboard />}
          />
          <Route path="/users/alluserdetails" element={<AllUsers />} />
          <Route
            path="/users/alluserdetails/:username"
            element={<AllUsers />}
          />
          <Route path="/users/viewusers/:uid" element={<Showuser />} />
          {/* GRAMSEVAK PATHS */}
          <Route path="/gramsevakas/addgramsevak" element={<AddGS />} />
          <Route path="/login/gramsevak" element={<GSLogin />} />
          <Route path="/gramsevaks/editgramsevak/:id" element={<EditGS />} />
          <Route path="/gramsevak/viewgramsevak/:uid" element={<ShowGS />} />
          <Route path="/gramsevaks/allgramsevaks" element={<AllGS />} />
          <Route
            path="/gramsevaks/allgramsevaks/:username"
            element={<AllGS />}
          />
          <Route
            path="/gramsevaks/dashboard/:username"
            element={<GSDashboard />}
          />
          {/* COMPLAINT PATHS */}
          <Route path="/complaints" element={<ComplaintRegistration />} />
          <Route
            path="/complaints/viewcomplaint/:cid"
            element={<ShowComplaint />}
          />
          <Route
            path="/complaints/addcomplaint/:id"
            element={<AddComplaint />}
          />
          <Route path="/complaints/addremark/:cid" element={<AddRemarks />} />
          <Route
            path="/complaints/editcomplaint/:id"
            element={<EditComplaint />}
          />
          <Route path="/complaints/allcomplaints" element={<AllComplaints />} />
          <Route
            path="/complaints/allcomplaints/:username"
            element={<AllComplaints />}
          />
          {/* ADMIN PATHS */}
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/admins/addadmin" element={<AddAdmin />} />

          <Route path="/admins/alladmins" element={<AllAdmins />} />

          <Route path="/admins/alladmins/:username" element={<AllAdmins />} />

          <Route path="/admins/viewadmin/:aid" element={<ShowAdmin />} />

          <Route path="/admins/editadmin/:id" element={<EditAdmin />} />

          <Route
            path="/admins/dashboard/:username"
            element={<AdminDashboard />}
          />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}

export default App;
