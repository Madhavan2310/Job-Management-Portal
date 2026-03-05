import "./App.css";
import { Link } from "react-router-dom";
function PostJob() {
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
      <div className="postjob-container">
        <h2 className="provider-title">Post a New Job 🚀</h2>

        <div className="postjob-form">

          <div className="form-group">
            <label>Job Title</label>
            <input type="text" placeholder="e.g. Frontend Developer" />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. Chennai / Remote" />
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select>
              <option value="">Select Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Job Description</label>
            <textarea placeholder="Describe job responsibilities and requirements"></textarea>
          </div>

          <button className="provider-card-btn submit-btn">
            Publish Job
          </button>

        </div>
      </div>
    </div>
  );
}

export default PostJob;