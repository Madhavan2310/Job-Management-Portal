import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function JobProviderSignup() {
  const[companyname,setCompanyname] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmpassword,setConfirmpassword] = useState("");
  
    function signup(e) {
    e.preventDefault();
  
    fetch("http://localhost:8080/api/jobprovidersignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        companyname: companyname,
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
    <div className="provider-signup-page">
      <div className="provider-signup-container">
        <h2>Create Employer Account </h2>
        <p className="provider-signup-subtitle">
          Register your company and start hiring
        </p>
        <form onSubmit={signup}>
        <input type="text" placeholder="Company Name" value={companyname} onChange={(e)=>setCompanyname(e.target.value)} required/>
        <input type="email" placeholder="Company Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} required />
        <button className="provider-signup-btn">Sign Up</button>
        </form>
        <p className="provider-redirect-text">
          Already have an account?
          <Link to="/jobproviderlogin" className="provider-link-style">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default JobProviderSignup;