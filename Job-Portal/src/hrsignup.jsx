import { Link } from "react-router-dom"
function Hrsignup()
{
    return(
        <div className="container">
            
            <div className="box">
                <h3>Job Portal</h3>
                <div className="data">
                    <p>Username</p>
                <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="data">
                    <p>Company Name</p>
                <input type="text" placeholder="Enter Your Company Name" required />
                </div>
                <div className="data">
                    <p>Email</p>
                <input type="email" placeholder="Enter Your Email" required />
                </div>
                <div className="data">
                    <p>Password</p>
                <input type="password" placeholder="Enter Your Password" required />
                </div>
                <div className="btn">
                <Link to='/hrotp'><button>Sign Up</button></Link>
                <p>Alredy have an account? <Link to='/hr-login'><u>Sign In</u></Link> </p>
                </div>
            </div>
            
        </div>
    )
}

export default Hrsignup