import { Link } from "react-router-dom";

function Home()
{
    return(
        <>
        
        <div className="home">
        <h1>NextHire</h1>
        <p className="caption">Connecting Talent with Opportunity</p>
        <div className="home-btn">
        <Link to='/login'><button>Job Seeker</button></Link>
        <Link to='/hr-login'><button>Job Provider</button></Link>
       </div>
        </div>
        </>
    )
}

export default Home