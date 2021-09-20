import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';


function NavBar() {
    
    return (

    <header className="Header">

        <nav className="Nav">
            <div className="Home">
                <NavLink to="/" id="root-link">
                    <h1 id="fixit-title">FIX IT</h1>
                </NavLink>
            </div>
            <div className="Extras">
                <NavLink className="link-text" to="/HomePage">Dashboard</NavLink>
                <NavLink className="link-text" to="/Board">View Projects</NavLink>
            </div>    
        </nav>
    </header>
);
}


export default NavBar;