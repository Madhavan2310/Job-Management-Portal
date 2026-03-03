import { Link } from "react-router-dom";

function Info3(){
    return (
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
                           
                       </div>
                       <div>
                <Link to='/info2'><button>Back</button></Link>
                <Link to='/dashboard'><button>Save</button></Link>
                </div>
                       
                   </div>
                {/* </div> */}
        </>
    )
}

export default Info3