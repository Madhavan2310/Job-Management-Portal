import { Link } from "react-router-dom";

function Info2(){
    return(
        <>
        <div className="page1">
           {/* <div className="container"> */}
                       <div className="box-1">
                           <h3>Skill Section</h3>
                           <div className="data">
                               <p>Technical Skill</p>
                           <input type="text" placeholder="Enter Your Skill" required />
                           </div>
                           <div className="data">
                               <p>Soft Skill</p>
                           <input type="email" placeholder="Enter Your Soft Kill" required />
                           </div>
                           <div className="data">
                               <p>Skill Level</p>
                           <select name="" id="">
                            <option value="">Select Skill Level</option>
                            <option value="">Beginner</option>
                            <option value="">Intermediate</option>
                            <option value="">Advanced</option>
                           </select>
                           </div>
                           
                           
                       {/* </div> */}
                       
                   </div>
                   {/* <div className="container"> */}
                       <div className="box-1">
                           <h3>Resume and Documents</h3>
                           <div className="data">
                               <p>Resume</p>
                           <input type="text" placeholder="Enter Your Job Title" required />
                           </div>
                           <div className="data">
                               <p>Portfolio</p>
                           <input type="number" placeholder="Enter Your Experience" required />
                           </div>
                           <div className="data">
                               <p>GitHub</p>
                           <input type="text" placeholder="Enter Your Company" required />
                           </div>
                           <div className="data">
                               <p>LinkedIn</p>
                           <input type="number" placeholder="Enter Your Salary" required />
                           </div>
                           
                       </div>
                       <div>
                <Link to='/info1'><button>Back</button></Link>
                <Link to='/dashboard'><button>save</button></Link>
                </div>
                       
                   </div>
                {/* </div> */}
        </>
    )
}

export default Info2