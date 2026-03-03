function Signup()
{
    return (
        <div className="container">
            
            <div className="box">
                <h3>Sign Up</h3>
                <input type="text" placeholder="Enter Your Name" required />
                <input type="email" placeholder="Enter Your Email" required />
                <input type="password" placeholder="Enter Your Password" required />
                <button>Sign Up</button>
            </div>
            
        </div>
    );
}

export default Signup