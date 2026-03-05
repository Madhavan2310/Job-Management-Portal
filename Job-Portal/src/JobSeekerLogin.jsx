import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function JobSeekerLogin() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate= useNavigate()
  const login=(e)=>{
  e.preventDefault();
    fetch("http://localhost:8080/api/joblogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      if (res.ok) {
        return res.text().then(data => {
          alert(data);
          navigate("/jobseekerdashboard");
        });
      } else {
        return res.text().then(error => {
          alert(error);
        });
      }
    })
    .catch(err => console.error(err));
  };
  return (
    <div className="login-page">
      <div className="form-container">
        <h2 className="form-title">Welcome Back</h2>
        <p className="form-subtitle">Login to continue your job search</p>
        <form onSubmit={login}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        {/* <Link to="/jobseekerdashboard"> */}
          <button className="primary-btn full-btn">Login</button>
        {/* </Link> */}
        </form>
        <p className="redirect-text">
          Don’t have an account?
          <Link to="/jobseekersignup" className="link-style">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default JobSeekerLogin;