import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import HomeIcon from '@material-ui/icons/Home';

function NavBar() {
    
    return (

<header className="Header">

    <nav className="Nav">
        <div className="Home">
            <NavLink to="/" id="home-link"> <h1 >FIX IT</h1></NavLink>
        </div>
        <div className="Extras">
            <HomeIcon/>
            
        


            
        
        </div>
    
    </nav>

</header>

);
    }


export default NavBar;