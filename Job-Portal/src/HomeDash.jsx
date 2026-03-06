import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">NextHire</h1>
        <p className="subtitle">
          Your Gateway to Dream Jobs & Top Talent
        </p>

        <div className="home-buttons">
          <Link to="/jobseekerlogin">
            <button className="primary-btn">Find Jobs</button>
          </Link>

          <Link to="/jobproviderlogin">
            <button className="secondary-btn">Post Jobs</button>
          </Link>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>Fast Hiring</h3>
            <p>Connect with employers instantly and apply in one click.</p>
          </div>

          <div className="feature-card">
            <h3>Verified Jobs</h3>
            <p>Trusted companies with high package opportunities.</p>
          </div>

          <div className="feature-card">
            <h3>Remote Friendly</h3>
            <p>Find work-from-home and flexible job options.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;