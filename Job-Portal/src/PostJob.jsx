import { useState } from "react";
import "./App.css";
import { Link, useSearchParams } from "react-router-dom";
function PostJob() {
   const[jobtitle,setJobtitle] = useState("");
      const[companyname,setCompanyname] = useState("");
      const[location,setLocation] = useState("");
      const[jobtype,setJobtype] = useState("");
      const [minSalary, setMinSalary] = useState("");
      const [maxSalary, setMaxSalary] = useState("");
      const[jobdescription,setJobdescription] = useState("");
    
      function posting(e) {
      e.preventDefault();
      fetch("http://localhost:8080/api/postjob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
  jobtitle: jobtitle,
  companyname: companyname,
  location: location,
  jobtype: jobtype,
  minSalary: minSalary,
  maxSalary: maxSalary,
  jobdescription: jobdescription
})
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }

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

      <div className="postjob-container">
        <h2 className="provider-title">Post a New Job</h2>

        <div className="postjob-form">
          <form onSubmit={posting}>
          <div className="form-group">
            <label>Job Title</label>
            <input type="text" placeholder="e.g. Frontend Developer" value={jobtitle} onChange={(e)=>setJobtitle(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" value={companyname} onChange={(e)=>setCompanyname(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. Chennai / Remote" value={location} onChange={(e)=>setLocation(e.target.value)} required/>
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select value={jobtype} onChange={(e)=>setJobtype(e.target.value)} required>
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="form-group">
  <label>Salary Range (LPA)</label>

  <div className="salary-inputs">
    <input
      type="number"
      placeholder="Min Salary"
      value={minSalary}
      onChange={(e) => setMinSalary(e.target.value)}
      required
    />

    <span className="salary-separator">to</span>

    <input
      type="number"
      placeholder="Max Salary"
      value={maxSalary}
      onChange={(e) => setMaxSalary(e.target.value)}
      required
    />
  </div>
</div>
          

          <div className="form-group full-width">
            <label>Job Description</label>
            <textarea placeholder="Describe job responsibilities and requirements" value={jobdescription} onChange={(e)=>setJobdescription(e.target.value)} required></textarea>
          </div>

          <button className="provider-card-btn submit-btn">
            Publish Job
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;


