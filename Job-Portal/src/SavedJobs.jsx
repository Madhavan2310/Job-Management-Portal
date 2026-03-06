import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function SavedJobs() {

  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = 1; 

  useEffect(() => {
    fetch(`http://localhost:8080/api/getsavedjobs/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch saved jobs");
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSavedJobs(data);
        } else {
          console.error("Expected array but got:", data);
          setSavedJobs([]);
        }
      })
      .catch(err => {
        console.error("Error fetching saved jobs:", err);
        setSavedJobs([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  const handleRemove = (savedId) => {
    fetch(`http://localhost:8080/api/deletesavedjob/${savedId}`, {
      method: "DELETE"
    })
      .then(res => res.text())
      .then(() => {
   
        setSavedJobs(prev =>
          prev.filter(job => job.id !== savedId)
        );
      })
      .catch(err => {
        console.error("Error removing saved job:", err);
      });
  };

  return (
    <div className="dashboard-wrapper">

      <div className="sidebar">
        <h2 className="logo">NextHire</h2>
        <ul>
          <Link to="/jobseekerdashboard"><li>Dashboard</li></Link>
          <Link to="/profileinformation"><li>Profile</li></Link>
          <Link to="/appliedjobs"><li>Applied Jobs</li></Link>
          <Link to="/savedjobs"><li className="active">Saved Jobs</li></Link>
          <Link to="/jobseekerlogin"><li>Logout</li></Link>
        </ul>
      </div>

      <div className="managejob-container">
        <h2 className="provider-title">Saved Jobs</h2>

        <div className="job-table">

          {loading && <p>Loading saved jobs...</p>}

          {!loading && savedJobs.length === 0 && (
            <p>No saved jobs found.</p>
          )}

          {!loading && savedJobs.map((saved) => (
            <div className="job-row" key={saved.id}>

              <div className="job-info">
                <h3>{saved.job?.jobtitle}</h3>
                <p>{saved.job?.company}</p>
                <p>
                  {saved.job?.location} | {saved.job?.jobtype}
                </p>

                <p className="salary">
                  ₹{saved.job?.minSalary} - ₹{saved.job?.maxSalary}
                </p>

                <p className="description">
                  {saved.job?.description}
                </p>
              </div>

              <div className="job-actions">
                <Link to={`/applynow/${saved.job?.id}`}>
                  <button className="submit-application-btn">
                    Apply Now
                  </button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleRemove(saved.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default SavedJobs;