import { Link } from "react-router-dom";

function Home()
{
    return(
        <div>
        <Link to='/login'><button>Job Seeker</button></Link>
        <Link to='/hr-login'><button>Job Provider</button></Link>
        </div>
    )
}

export default Home