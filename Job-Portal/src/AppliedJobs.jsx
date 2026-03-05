import "./App.css";
import { Link } from "react-router-dom";
function AppliedJobs() {
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
      <div className="appliedjobs-container">
        <h2 className="dashboard-title">Applied Jobs 📄</h2>

        {/* Job Card 1 */}
        <div className="applied-job-card">
          <div className="job-details">
            <h3>Frontend Developer</h3>
            <p>ABC Technologies | Chennai</p>
            <span className="application-status pending">Pending</span>
          </div>

          <div className="job-actions">
            <button className="view-btn">View</button>
            <button className="withdraw-btn">Withdraw</button>
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="applied-job-card">
          <div className="job-details">
            <h3>Backend Developer</h3>
            <p>XYZ Solutions | Remote</p>
            <span className="application-status selected">Selected</span>
          </div>

          <div className="job-actions">
            <button className="view-btn">View</button>
            <button className="withdraw-btn">Withdraw</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AppliedJobs;