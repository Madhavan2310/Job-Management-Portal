import "./App.css";

function JobSeekerProfileUpdate() {
  return (
    <div className="form-container">
      <h2>Update Profile</h2>

      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Skills" />
      <input type="text" placeholder="Experience" />
      <input type="text" placeholder="Location" />

      <button className="primary-btn">Update</button>
    </div>
  );
}

export default JobSeekerProfileUpdate;