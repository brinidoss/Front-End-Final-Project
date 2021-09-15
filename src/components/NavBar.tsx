import React from "react";
import './NavBar.css';

function NavBar() {
    return (

<nav className="topnav">
<h1 className="fixit">FIXIT</h1>  
  <div className="login-container">
  <form action="/action_page.php">
      <input type="text" placeholder="Username" name="username"></input>
      <input type="text" placeholder="Password" name="password"></input>
      <button type="submit">Login</button>
      </form>
  </div>
</nav>
);
    }


export default NavBar;