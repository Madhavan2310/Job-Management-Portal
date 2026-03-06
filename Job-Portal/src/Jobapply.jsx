import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";

function Jobapply() {

  const { id } = useParams(); 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const userId = 1;

  function submitApplication(e) {
    e.preventDefault();

    fetch(`http://localhost:8080/api/applyjob/${id}/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        coverLetter: coverLetter
      })
    })
    .then(res => res.text())
    .then(data => {
      alert(data);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="dashboard-wrapper">

      <div className="sidebar">
        <h2 className="logo">NextHire</h2>
        <ul>
          <Link to="/jobseekerdashboard"><li>Dashboard</li></Link>
          <Link to="/jobseekerprofile"><li>Profile</li></Link>
          <Link to="/appliedjobs"><li>Applied Jobs</li></Link>
          <Link to="/savedjobs"><li>Saved Jobs</li></Link>
          <Link to="/jobseekerlogin"><li>Logout</li></Link>
        </ul>
      </div>

      <div className="apply-container">

        <h2 className="dashboard-title">Apply for Job</h2>

        <form className="apply-form" onSubmit={submitApplication}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label>Cover Letter</label>
          <textarea
            placeholder="Why are you suitable for this job?"
            rows="5"
            value={coverLetter}
            onChange={(e)=>setCoverLetter(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="submit-application-btn">
            Submit Application
          </button>

        </form>

      </div>
    </div>
  );
}

export default Jobapply;