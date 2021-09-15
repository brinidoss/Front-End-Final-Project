import React from "react";
import HomeRenovationPix from '../images/HomeRenovationPix.jpeg';
import './LandingPage.css';


function Landing() {
    
    return(
        <div className="parent">
        <h1 className="firstLine">Every home tells a story...</h1>
        <h1 className="secondLine">Let us help add another chapter to yours.</h1>

        <button className="landingBtn">Join Here</button>

        <img src={HomeRenovationPix} alt="renovation pix"/>
</div>

    );
}

export default Landing;

