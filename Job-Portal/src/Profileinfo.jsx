import { Link } from "react-router-dom"
function Profileinfo()
{
    return(
        <>
        <div className="page1">
           {/* <div className="container"> */}
                       <div className="box-1">
                           <h3>Personal Info</h3>
                           <div className="data">
                               <p>Fullname</p>
                           <input type="text" placeholder="Enter Your Name" required />
                           </div>
                           <div className="data">
                               <p>Email</p>
                           <input type="email" placeholder="Enter Your Email" required />
                           </div>
                           <div className="data">
                               <p>Phone No</p>
                           <input type="number" placeholder="Enter Your Number" required />
                           </div>
                           <div className="data">
                               <p>Date of Birth</p>
                           <input type="date"  required />
                           </div>
                           <div className="data">
                               <p>Gender</p>
                           <select name="Gender" id="jobType">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                            </select>
                           </div>
                            <div className="data">
                               <p>Location</p>
                           <input type="password" placeholder="Enter Your Location" required />
                           </div>
                           
                       {/* </div> */}
                       
                   </div>
                   {/* <div className="container"> */}
                       <div className="box-1">
                           <h3>Professional Info</h3>
                           <div className="data">
                               <p>Job Title</p>
                           <input type="text" placeholder="Enter Your Job Title" required />
                           </div>
                           <div className="data">
                               <p>Experience</p>
                           <input type="number" placeholder="Enter Your Experience" required />
                           </div>
                           <div className="data">
                               <p>Current Company</p>
                           <input type="text" placeholder="Enter Your Company" required />
                           </div>
                           <div className="data">
                               <p>Expected Salary</p>
                           <input type="number" placeholder="Enter Your Salary" required />
                           </div>
                           <div className="data">
                               <p>Prefered Location</p>
                           <input type="text" placeholder="Enter Your Location" required />
                           </div>
                            <div className="data">
                               <p>Prefered Job Type</p>
                           <select >
                            <option >Prefered Job Type</option>
                            <option >Full Time</option>
                            <option >Part Time</option>
                            <option >Remote</option>
                            </select>
                           </div>
                           
                       </div>
                       <div>
                <Link to='/dashboard'><button>Back</button></Link>
                <Link to='/info1'><button>Next</button></Link>
                </div>
                       
                   </div>
                {/* </div> */}
                
        </>
    )
}

export default Profileinfo