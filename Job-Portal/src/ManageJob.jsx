import "./App.css";
import { Link } from "react-router-dom";
function ManageJob() {
  return (
    <div className="provider-dashboard-wrapper">

      {/* Sidebar */}
      <div className="provider-sidebar">
        <h2 className="provider-logo">NextHire</h2>
        <ul>
          <Link to='/jobproviderdashboard'><li>🏠 Dashboard</li></Link>
          <Link to='/postjob'><li>➕ Post Job</li></Link>
          <Link to='/managejob'><li>📋 Manage Jobs</li></Link>
         <Link to='/applicants'> <li>👥 Applicants</li></Link>
          <Link to='/jobproviderlogin'><li>🚪 Logout</li></Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="managejob-container">
        <h2 className="provider-title">Manage Job Posts 📋</h2>

        <div className="job-table">

          {/* Example Job 1 */}
          <div className="job-row">
            <div className="job-info">
              <h3>Frontend Developer</h3>
              <p>Chennai | Full Time</p>
              <span className="status active">Active</span>
            </div>

            <div className="job-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>

          {/* Example Job 2 */}
          <div className="job-row">
            <div className="job-info">
              <h3>Backend Developer</h3>
              <p>Remote | Internship</p>
              <span className="status closed">Closed</span>
            </div>

            <div className="job-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ManageJob;