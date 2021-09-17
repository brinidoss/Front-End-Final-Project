import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import HomeIcon from '@material-ui/icons/Home';


function NavBar() {
    
    return (

<header className="Header">

    <nav className="Nav">
        <div className="Home">
         <h1 >FIX IT</h1>
        </div>
        <div className="Extras">
        <NavLink to="/homepage" id="home-link">
        <HomeIcon/>
            </NavLink>
         
 
 
            
        


            
        
        </div>
    
    </nav>

</header>

);
    }


export default NavBar;