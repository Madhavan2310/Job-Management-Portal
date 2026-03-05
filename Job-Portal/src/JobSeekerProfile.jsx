import "./App.css";
import { Link } from "react-router-dom";
function JobSeekerProfile() {
  return (
    <div className="dashboard-wrapper">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">NextHire</h2>
        <ul>
       <Link to='/jobseekerdashboard'><li>🏠 Dashboard</li></Link>
          <Link to='/jobseekerprofile'><li>👤 Profile</li></Link>
          <Link to='/appliedjobs'><li>📄 Applied Jobs</li></Link>
         <Link to='/savedjobs'><li>⭐ Saved Jobs</li></Link>
          <Link to='/jobseekerlogin'><li>🚪 Logout</li></Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="profile-container">
        <h2 className="dashboard-title">My Profile 👤</h2>

        <div className="profile-card">

          <div className="profile-left">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="profile-image"
            />
            <button className="upload-btn">Upload Photo</button>
          </div>

          <div className="profile-right">

            <div className="profile-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="profile-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="profile-group">
              <label>Phone</label>
              <input type="text" placeholder="Enter phone number" />
            </div>

            <div className="profile-group">
              <label>Skills</label>
              <input type="text" placeholder="e.g. React, Java, MySQL" />
            </div>

            <div className="profile-group full-width">
              <label>About</label>
              <textarea placeholder="Write about yourself"></textarea>
            </div>

            <button className="save-profile-btn">Save Changes</button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default JobSeekerProfile;