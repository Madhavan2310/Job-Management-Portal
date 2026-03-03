import { Link } from "react-router-dom"
function Hrotp()
{
    return(
    <div className="otp-container">
        <h4>HR Page</h4>
        <div className="otpbox">
            <p className="hint">Enter the OTP</p>
        <div className="data">
            
            <input type="number" required />
        </div>
        <div className="otp-btn">
        <Link to='/hr-login'><button >Back</button></Link>
        <Link to='/hrdashboard'><button >Confirm</button></Link>
        </div>
        </div>
        
    </div>
    )
    
}

export default Hrotp