import { useState } from "react";
import { Link } from "react-router-dom"
function Hrsignup()
{
    const[username,setUsername] = useState("");
    const[companyname,setCompanyname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        companyname: companyname,
        email: email,
        password: password
      })
    })
    .then(response => response.text())
    .then(data => {
      console.log("Success:", data);
      return(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
    return(
        <div className="container">
            <h4>HR Page</h4>
            <div className="box">
                <h3>NextHire</h3>
                <form onSubmit={handleLogin}>
                <div className="data">
                    <p>Username</p>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>{setUsername(e.target.value)}} required />
                </div>
                <div className="data">
                    <p>Company Name</p>
                <input type="text" placeholder="Enter Your Company Name" onChange={(e)=>{setCompanyname(e.target.value)}} required />
                </div>
                <div className="data">
                    <p>Email</p>
                <input type="email" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} required />
                </div>
                <div className="data">
                    <p>Password</p>
                <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} required />
                </div>
                <div className="btn">
                <input type="submit" value={"SignUp"} />
                <p>Alredy have an account? <Link to='/hr-login'><u>Sign In</u></Link> </p>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default Hrsignup