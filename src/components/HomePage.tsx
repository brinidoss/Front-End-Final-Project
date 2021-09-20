import React from "react";
import { NavLink } from "react-router-dom";
import "../components/HomePage.css"
import Graph from '../images/Graph.png';


function HomePage() {
    return (
        <div className="parent">
            <div className="graph">
            <img src={Graph} alt="graph pix"/>
            </div>
            <div className="test-btn">
               <div className="brdbtn">
            <NavLink to="/Board"> <button className="boardBtn">Go to Board</button></NavLink>
            </div> 
            <div className="projbtn">
            <NavLink to="/Form"> <button className="ProjectBtn">New Project</button></NavLink>
            </div>
            </div>
            
        </div>
    );
}

export default HomePage;