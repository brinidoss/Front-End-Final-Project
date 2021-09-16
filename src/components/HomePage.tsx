import React from "react";
import { NavLink } from "react-router-dom";
import "../components/HomePage.css"


function HomePage() {
    return (
        <div>
            
            <div className="test-btn">
            <NavLink to="/Test"> <button className="boardBtn">Go to Board</button></NavLink>
            <NavLink to="/Form"> <button className="ProjectBtn">New Project</button></NavLink>
            <NavLink to="/"> <button className="HomePage">Home Page</button></NavLink>

            </div>
            
        </div>
    );
}

export default HomePage;