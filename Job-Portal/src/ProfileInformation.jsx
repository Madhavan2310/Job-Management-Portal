import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ProfileInformation() {

  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "Madhav Sathish",
    email: "madhav@gmail.com",
    phone: "9876543210",
    skills: "Java, Spring Boot, React",
    experience: "Fresher"
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
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

      <div className="profile-container">

        <div className="profile-header">
          <h2>Profile Information</h2>
          <button 
            className="edit-btn"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="profile-card">

          <label>Name</label>
          <input 
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editMode}
          />

          <label>Email</label>
          <input 
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editMode}
          />

          <label>Phone</label>
          <input 
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!editMode}
          />

          <label>Skills</label>
          <input 
            type="text"
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            disabled={!editMode}
          />

          <label>Experience</label>
          <input 
            type="text"
            name="experience"
            value={profile.experience}
            onChange={handleChange}
            disabled={!editMode}
          />

          {editMode && (
            <button className="save-profile-btn">
              Save Changes
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;