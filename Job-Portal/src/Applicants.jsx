import "./App.css";
import { Link } from "react-router-dom";
function Applicants() {
  return (
    <div className="provider-dashboard-wrapper">
      <div className="provider-sidebar">
        <h2 className="provider-logo">NextHire</h2>
        <ul>
          <Link to='/jobproviderdashboard'><li>Dashboard</li></Link>
          <Link to='/postjob'><li>Post Job</li></Link>
          <Link to='/managejob'><li>Manage Jobs</li></Link>
         <Link to='/applicants'> <li>Applicants</li></Link>
          <Link to='/jobproviderlogin'><li>Logout</li></Link>
        </ul>
      </div>
      <div className="applicants-container">
        <h2 className="provider-title">Job Applicants</h2>

        <div className="applicant-card">

          <div className="applicant-info">
            <h3>Rahul Kumar</h3>
            <p>Applied for: Frontend Developer</p>
            <p>Email: rahul@gmail.com</p>
            <span className="status new">New</span>
          </div>

          <div className="applicant-actions">
            <button className="shortlist-btn">Shortlist</button>
            <button className="reject-btn">Reject</button>
          </div>

        </div>

        <div className="applicant-card">

          <div className="applicant-info">
            <h3>Priya Sharma</h3>
            <p>Applied for: Backend Developer</p>
            <p>Email: priya@gmail.com</p>
            <span className="status shortlisted">Shortlisted</span>
          </div>

          <div className="applicant-actions">
            <button className="shortlist-btn">Shortlist</button>
            <button className="reject-btn">Reject</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Applicants;