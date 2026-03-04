import {Link} from "react-router-dom"
function Login()
{
    return(
        <div className="container">
        <form className="log-box">
                <h3>NextHire</h3>
                <div className="data">
                    <p>Email</p>
                <input type="email" placeholder="Enter Your Email" required />
                </div>
                <div className="data">
                    <p>Password</p>
                <input type="password" placeholder="Enter Your Password" required />
                </div>
                <div className="btn">
                <Link to='/otp'><button>Sign In</button></Link>
                <p>Don't have an account? <Link to='/signup'><u>Sign Up</u></Link> </p>
                </div>
            </form>
          </div>  
    );
}

export default Login