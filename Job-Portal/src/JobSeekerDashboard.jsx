import "./App.css";
import { Link } from "react-router-dom";
function JobSeekerDashboard() {
  return (
    <>
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
      <div className="dashboard-container">
        {/* <h2 className="dashboard-title">Welcome Back 👋</h2>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>👤 Profile</h3>
            <p>Update your personal and professional details.</p>
            <Link to='/jobseekerprofile'><button className="card-btn">Manage Profile</button></Link>
          </div>

          <div className="dashboard-card">
            <h3>📄 Applied Jobs</h3>
            <p>Track and manage jobs you’ve applied for.</p>
           <Link to='/appliedjobs'><button className="card-btn">View Applications</button></Link>
          </div>

          <div className="dashboard-card">
            <h3>⭐ Saved Jobs</h3>
            <p>Review jobs you saved for later.</p>
            <Link to='/savedjobs'><button className="card-btn">View Saved</button></Link>
          </div>
        </div>
      </div>
      <div className="savedjobs-container"> */}
        <h2 className="dashboard-title">Job List</h2>

        {/* Job Card 1 */}
        <div className="saved-job-card">
          <div className="saved-job-details">
            <h3>UI/UX Designer</h3>
            <p>Creative Studio | Bangalore</p>
            {/* <span className="saved-badge">Saved</span> */}
          </div>

          <div className="saved-job-actions">
            <button className="save-btn">Save Job</button>
            <Link to='/jobapply'><button className="apply-btn">Apply Now</button></Link>
           
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="saved-job-card">
          <div className="saved-job-details">
            <h3>Java Developer</h3>
            <p>Tech Solutions | Remote</p>
            {/* <span className="saved-badge">Saved</span> */}
          </div>

          <div className="saved-job-actions">
            <button className="save-btn">Save Job</button>
            <Link to='/jobapply'><button className="apply-btn">Apply Now</button></Link>
            
          </div>
        </div>

      </div>

    </div>
  
    </>
  );
}

export default JobSeekerDashboard;