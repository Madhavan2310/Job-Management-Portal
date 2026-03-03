import {Link} from "react-router-dom"
function Signup()
{
    return (
        <div className="container">
            <h4>User Page</h4>
            <div className="box">
                <h3>NextHire</h3>
                <div className="data">
                    <p>Username</p>
                <input type="text" placeholder="Enter Your Name" required />
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
                <Link to='/otp'><button>Sign Up</button></Link>
                <p>Alredy have an account? <Link to='/'><u>Sign In</u></Link> </p>
                </div>
            </div>
            
        </div>
    );
}

export default Signup