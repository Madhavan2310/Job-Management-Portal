import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobProviderLogin() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate= useNavigate()
  const login=(e)=>{
  e.preventDefault();
    fetch("http://localhost:8080/api/adminlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      if (res.ok) {
        return res.text().then(data => {
          alert(data);
          navigate("/jobproviderdashboard");
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
    <div className="provider-login-page">
      <div className="provider-form-container">
        <h2 className="form-title">JobProvider Login</h2>
        <p className="form-subtitle">
          Access your dashboard and manage job postings
        </p>
        <form onSubmit={login}>
        <input type="email" placeholder="Enter company email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button className="provider-btn full-btn">Login</button>
        </form>
        <p className="redirect-text">
          Don’t have an account?
          <Link to="/jobprovidersignup" className="link-style">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default JobProviderLogin;