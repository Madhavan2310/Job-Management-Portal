import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function JobSeekerSignup() {

  const[fullname,setFullname] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmpassword,setConfirmpassword] = useState("");

  function signin(e) {
  e.preventDefault();

  fetch("http://localhost:8080/api/jobsignup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      password: password,
      confirmpassword: confirmpassword
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
    <div className="seeker-signup-page">
      <div className="seeker-signup-container">
        <h2>Create Your Account </h2>
        <p className="seeker-signup-subtitle">
          Start applying for your dream job today
        </p>
        <form onSubmit={signin}>
        <input type="text" placeholder="Full Name" value={fullname} onChange={(e)=>setFullname(e.target.value)} required/>
        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} required/>
        <button className="seeker-signup-btn">Sign Up</button>
        {/* <Link to='/jobseekerlogin'></Link> */}
        </form>
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