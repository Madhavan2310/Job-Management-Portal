import "./App.css";

function OTP() {
  return (
    <div className="form-container">
      <h2>Enter OTP</h2>

      <input type="text" placeholder="Enter 6-digit OTP" />
      <button className="primary-btn">Verify</button>
    </div>
  );
}

export default OTP;