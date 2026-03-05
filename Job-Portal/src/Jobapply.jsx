import "./App.css";
import { Link } from "react-router-dom";
function Jobapply() {
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
      <div className="apply-container">
        <h2 className="dashboard-title">Apply for Job</h2>

        {/* Job Info */}
        <div className="job-info-box">
          <h3>Frontend Developer</h3>
          <p>Tech Solutions Pvt Ltd | Chennai</p>
          <p><strong>Experience:</strong> 1-3 Years</p>
          <p><strong>Salary:</strong> ₹3 LPA - ₹5 LPA</p>
        </div>

        {/* Application Form */}
        <form className="apply-form">

          <label>Upload Resume</label>
          <input type="file" />

          <label>Cover Letter</label>
          <textarea
            placeholder="Write why you are suitable for this job..."
            rows="5"
          ></textarea>

          <button type="submit" className="submit-application-btn">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}

export default Jobapply;