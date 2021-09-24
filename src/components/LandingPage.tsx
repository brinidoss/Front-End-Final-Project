import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeRenovationPix from '../images/HomeRenovationPix.jpeg';
import '../styles/LandingPage.css';
import { useAuthUser } from "../Context/auth-context";
import firebase from "../firebaseConfig";
import SignInButton from "./SignInButton";



function Landing() {
  
    function logout() {
        firebase.auth().signOut();
      }
      
    //grabs user who is logged in
    const user = useAuthUser();

    return(
        <div className="LandingPage">
                {/* <NavLink to="/HomePage">Dashboard</NavLink>
                <NavLink to="/Board">View Projects</NavLink> */}
            <h1 className="firstLine">Every home tells a story...</h1>
            <h1 className="secondLine">Let us help add another chapter to yours.</h1>
        
            <div className="login-container"> 
                { user ?
            <>
              {user.displayName} {' '}     
              (<Link to="/HomePage">My Projects</Link>) {' '}   
              <button id="LandingPage__logoutButton" onClick={logout}>Sign Out</button>
              </> :
                <SignInButton />
                }
            </div>

        <img src={HomeRenovationPix} alt="renovation pix"/>
                 
            </div>

    );
}

export default Landing;

