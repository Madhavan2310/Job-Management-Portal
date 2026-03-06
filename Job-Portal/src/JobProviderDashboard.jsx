import "./App.css";
import { Link } from "react-router-dom";
function JobProviderDashboard() {
  return (
    <div className="provider-dashboard-wrapper">

      <div className="provider-sidebar">
        <h2 className="provider-logo">NextHire</h2>
        <ul>
          <Link to='/JobProviderDashboard'><li> Dashboard</li></Link>
          <Link to='/postjob'><li>Post Job</li></Link>
          <Link to='/managejob'><li>Manage Jobs</li></Link>
         <Link to='/applicants'> <li>Applicants</li></Link>
          <Link to='/jobproviderlogin'><li>Logout</li></Link>
        </ul>
      </div>

      <div className="provider-dashboard-container">
        <h2 className="provider-title">JobProvider Dashboard</h2>

        <div className="provider-cards">

          <div className="provider-card">
            <h3> Post New Job</h3>
            <p>Create and publish new job opportunities.</p>
            <Link to='/postjob'><button className="provider-card-btn">Create Job</button></Link>
          </div>

          <div className="provider-card">
            <h3>Manage Jobs</h3>
            <p>Edit or remove your existing job posts.</p>
           <Link to='/managejob'><button className="provider-card-btn">View Jobs</button></Link>
          </div>

          <div className="provider-card">
            <h3>Applicants</h3>
            <p>Review candidates who applied to your jobs.</p>
            <Link to='/applicants'><button className="provider-card-btn">View Applicants</button></Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default JobProviderDashboard;  