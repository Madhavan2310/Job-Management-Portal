import { Link } from "react-router-dom";

function Info1()
{
    return (
        <>
            <div className="page1">
           {/* <div className="container"> */}
                       <div className="box-1">
                           <h3>Educational Details</h3>
                           <div className="data">
                               <p>Degree</p>
                           <input type="text" placeholder="Enter Your Degree" required />
                           </div>
                           <div className="data">
                               <p>College</p>
                           <input type="email" placeholder="Enter Your College" required />
                           </div>
                           <div className="data">
                               <p>Department</p>
                           <input type="number" placeholder="Enter Your Dept" required />
                           </div>
                           <div className="data">
                               <p>Batch Year</p>
                           <input type="number" placeholder="Enter the Year" required />
                           </div>
                           
                            <div className="data">
                               <p>CGPA</p>
                           <input type="number" placeholder="Enter Your CGPA" required />
                           </div>
                           
                       {/* </div> */}
                       
                   </div>
                   {/* <div className="container"> */}
                       <div className="box-1">
                           <h3>Work Experience</h3>
                           <div className="data">
                               <p>Company Name</p>
                           <input type="text" placeholder="Enter the Company Name" required />
                           </div>
                           <div className="data">
                               <p>Role</p>
                           <input type="number" placeholder="Enter the Role" required />
                           </div>
                           <div className="data">
                               <p>Duration</p>
                           <input type="text" placeholder="Enter the Duration" required />
                           </div>
                           <div className="data">
                               <p>Key Resposibilities</p>
                           <input type="text" placeholder="Enter Your Resposibilities" required />
                           </div>
                           <div className="data">
                               <p>Achievements</p>
                           <input type="text" placeholder="Enter Your Achievements" required />
                           </div>
                           
                       </div>
                       <div>
                <Link to='/profileinfo'><button>Back</button></Link>
                <Link to='/info2'><button>Next</button></Link>
                </div>
                       
                   </div>
                {/* </div> */}
        </>
    )
}

export default Info1