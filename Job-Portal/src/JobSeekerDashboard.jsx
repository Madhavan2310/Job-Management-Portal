import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function JobSeekerDashboard() {

  const [jobs, setJobs] = useState([]);

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



  return (
    <div className="dashboard-wrapper">

      <div className="sidebar">
        <h2 className="logo">NextHire</h2>
        <ul>
          <Link to="/jobseekerdashboard"><li>Dashboard</li></Link>
          <Link to="/profileinformation"><li>Profile</li></Link>
          <Link to="/appliedjobs"><li>Applied Jobs</li></Link>
          <Link to="/savedjobs"><li>Saved Jobs</li></Link>
          <Link to="/jobseekerlogin"><li>Logout</li></Link>
        </ul>
      </div>

      <div className="managejob-container">
        <h2 className="provider-title">Available Jobs</h2>

        <div className="job-table">

          {jobs.length === 0 ? (
            <p>No jobs available.</p>
          ) : (
            jobs.map((job) => (
              <div className="job-row" key={job.id}>

                <div className="job-info">
                  <h3>{job.jobtitle}</h3>
                  <p>{job.location} | {job.jobtype}</p>

                  <p className="salary">
                    Salary: ₹{job.minSalary} - ₹{job.maxSalary}
                  </p>

                  <span className="status active">
                    Active
                  </span>
                </div>

                <div className="job-actions">
                  <button className="save-btn">Save Job</button>
                    <Link to={`/jobapply/${job.id}`}>
    <button className="submit-application-btn">
      Apply
    </button></Link>
                </div>

              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
}

export default JobSeekerDashboard;