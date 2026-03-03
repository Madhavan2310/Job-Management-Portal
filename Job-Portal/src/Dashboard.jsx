import './navbar.css'
import { Link } from 'react-router-dom';
function Dashboard()
{
    return(
        <>
            <div className="bar">
                <div className="profile"></div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <Link to='/profileinfo'><button>Profile Update</button></Link>
                <Link to='/jobform'><button>Apply Job</button></Link>
                <Link to='/login'><button>Log out</button></Link>
            </div>
        </>
    );
}

export default Dashboard