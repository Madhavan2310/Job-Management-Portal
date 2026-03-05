import { Link } from "react-router-dom";
import "./App.css";

function JobProviderLogin() {
  return (
    <div className="provider-login-page">
      <div className="provider-form-container">
        <h2 className="form-title">JobProvider Login 🏢</h2>
        <p className="form-subtitle">
          Access your dashboard and manage job postings
        </p>

        <input type="email" placeholder="Enter company email" />
        <input type="password" placeholder="Enter password" />

        <Link to="/jobproviderdashboard">
          <button className="provider-btn full-btn">Login</button>
        </Link>

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