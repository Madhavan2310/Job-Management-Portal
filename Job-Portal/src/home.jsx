import { Link } from "react-router-dom";
import interview from "./assets/interview.jpeg"
function Home()
{
    return(
        <>
        <nav>

        <div className="homepge">
           <div className="logo"></div> 
           <ul className="ulli">
            <li>Placement</li>
            <li>High Package</li>
           </ul>
        <h1 className="title">NextHire</h1>   
                <ul>
                    <li>Home</li>
                    <li>Apply Job</li>
                    <li>Post Job</li>
                    <li>Company</li>
                </ul>
                <div className="pfo"></div>
                
            
        </div>
        
            <h2 className="caption">Where Talent Meets Opportunity</h2>
            <p className="des">Our job portal connects talented job seekers with leading companies. 
                We make hiring and job searching easier through a seamless, user-friendly platform designed for success</p>
            <img className="home-img" src={interview} alt="" />
        
        </nav>
        </>
    )
}

export default Home