import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeRenovationPix from '../images/HomeRenovationPix.jpeg';
import './LandingPage.css';
import { useAuthUser } from "../Context/auth-context";
import firebase from "../firebaseConfig";
import SignInButton from "./SignInButton";
import Footer from "./Footer";


function Landing() {
  
    function logout() {
        firebase.auth().signOut();
      }
      
    //grabs use who is logged in
    const user = useAuthUser();

    return(
        <div className="parent">
                {/* <NavLink to="/HomePage">Dashboard</NavLink>
                <NavLink to="/Board">View Projects</NavLink> */}
            <h1 className="firstLine">Every home tells a story...</h1>
            <h1 className="secondLine">Let us help add another chapter to yours.</h1>
        
            <div className="login-container"> 
                { user ?
            <>
              {user.displayName} {' '}
              (<Link to="/me">My Projects</Link>) {' '}
              <button onClick={logout}>Sign Out</button>
              </> :
                <SignInButton />
                }
            </div>

        <img src={HomeRenovationPix} alt="renovation pix"/>
                 <Footer/>
            </div>

    );
}

export default Landing;

