import React from "react";
import { NavLink } from "react-router-dom";
import HomeRenovationPix from '../images/HomeRenovationPix.jpeg';
import './LandingPage.css';


function Landing() {
    
    return(
        <div className="parent">
            <div className="login-container">
                <input type="text" placeholder="Username" name="username"></input>
                <input type="text" placeholder="Password" name="password"></input>
                <button type="submit">Login</button>
                <NavLink to="/HomePage">Home Page</NavLink>
            </div>
            <h1 className="firstLine">Every home tells a story...</h1>
            <h1 className="secondLine">Let us help add another chapter to yours.</h1>

            <button className="landingBtn">Join Here</button>

        

        <img src={HomeRenovationPix} alt="renovation pix"/>
        </div>

    );
}

export default Landing;

