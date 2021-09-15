import React from "react";
import { NavLink } from "react-router-dom";
import "../components/HomePage.css"


function HomePage() {
    return (
        <div>
            <div className="login-container">
                <input type="text" placeholder="Username" name="username"></input>
                <input type="text" placeholder="Password" name="password"></input>
                <button type="submit">Login</button>
            </div>
            <div className="test-btn">

            
            <NavLink to="/Test"> <button className="boardBtn">Go to Board</button></NavLink>
            
            <NavLink to="/Form"> <button className="ProjectBtn">New Project</button></NavLink>

            <NavLink to="/LandingPage"> <button className="LandingPage">Landing Page</button></NavLink>

            </div>
            


        </div>
    );
}

export default HomePage;