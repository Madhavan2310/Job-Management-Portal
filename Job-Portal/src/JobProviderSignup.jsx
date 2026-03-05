import { Link } from "react-router-dom";
import "./App.css";

function JobProviderSignup() {
  return (
    <div className="provider-signup-page">
      <div className="provider-signup-container">
        <h2>Create Employer Account 🏢</h2>
        <p className="provider-signup-subtitle">
          Register your company and start hiring
        </p>

        <input type="text" placeholder="Company Name" />
        <input type="email" placeholder="Company Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <Link to='/jobproviderlogin'><button className="provider-signup-btn">Sign Up</button></Link>

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