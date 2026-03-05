import "./App.css";
import { Link } from "react-router-dom";
function SavedJobs() {
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
      <div className="savedjobs-container">
        <h2 className="dashboard-title">Saved Jobs ⭐</h2>

        {/* Job Card 1 */}
        <div className="saved-job-card">
          <div className="saved-job-details">
            <h3>UI/UX Designer</h3>
            <p>Creative Studio | Bangalore</p>
            <span className="saved-badge">Saved</span>
          </div>

          <div className="saved-job-actions">
            <Link to='/jobapply'><button className="apply-btn">Apply Now</button></Link>
            <button className="remove-btn">Remove</button>
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="saved-job-card">
          <div className="saved-job-details">
            <h3>Java Developer</h3>
            <p>Tech Solutions | Remote</p>
            <span className="saved-badge">Saved</span>
          </div>

          <div className="saved-job-actions">
            <Link to='/jobapply'><button className="apply-btn">Apply Now</button></Link>
            <button className="remove-btn">Remove</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SavedJobs;