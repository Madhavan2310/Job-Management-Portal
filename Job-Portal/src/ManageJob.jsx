

import { useState,useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ManageJob() {

  useEffect(() => {
  fetch("http://localhost:8080/api/getpostjob")
    .then(response => response.json())
    .then(data => {
      setJobs(data);
    })
    .catch(error => {
      console.error("Error fetching jobs:", error);
    });
}, []);
  // Sample Job Data (Later you can fetch from backend)
  const [jobs, setJobs] = useState([]);

  // Delete Job Function
  const deleteJob = (id) => {
    const updatedJobs = jobs.filter(job => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div className="provider-dashboard-wrapper">

      {/* Sidebar */}
      <div className="provider-sidebar">
        <h2 className="provider-logo">NextHire</h2>
        <ul>
          <Link to="/jobproviderdashboard"><li>Dashboard</li></Link>
          <Link to="/postjob"><li>Post Job</li></Link>
          <Link to="/managejob"><li>Manage Jobs</li></Link>
          <Link to="/applicants"><li>Applicants</li></Link>
          <Link to="/jobproviderlogin"><li>Logout</li></Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="managejob-container">
        <h2 className="provider-title">Manage Job Posts</h2>

        <div className="job-table">

          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            jobs.map((job) => (
              <div className="job-row" key={job.id}>

                <div className="job-info">
                  <h3>{job.jobtitle}</h3>
                  <p>{job.location} | {job.jobtype}</p>

                  <p className="salary">
                     Salary: ₹{job.minSalary} - ₹{job.maxSalary}
                  </p>

                  <span 
                    // className={`status ${job.status === "Active" ? "active" : "closed"}`}
                  >
                    {"active"}
                  </span>
                </div>

                <div className="job-actions">
                  
                  <button 
                    className="delete-btn"
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete
                  </button>
                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default ManageJob;