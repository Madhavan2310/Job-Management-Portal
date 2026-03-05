import { Link } from "react-router-dom";
import "./App.css";

function JobSeekerLogin() {
  return (
    <div className="login-page">
      <div className="form-container">
        <h2 className="form-title">Welcome Back 👋</h2>
        <p className="form-subtitle">Login to continue your job search</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <Link to="/jobseekerdashboard">
          <button className="primary-btn full-btn">Login</button>
        </Link>

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