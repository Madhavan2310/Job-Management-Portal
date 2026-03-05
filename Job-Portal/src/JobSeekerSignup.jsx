import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function JobSeekerSignup() {

  const[fullname,setFullname] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmpassword,setConfirmpassword] = useState("");
  return (
    <div className="seeker-signup-page">
      <div className="seeker-signup-container">
        <h2>Create Your Account 👋</h2>
        <p className="seeker-signup-subtitle">
          Start applying for your dream job today
        </p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <Link to='/jobseekerlogin'><button className="seeker-signup-btn">Sign Up</button></Link>

        <p className="seeker-redirect-text">
          Already have an account?
          <Link to="/jobseekerlogin" className="seeker-link-style">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default JobSeekerSignup;