import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeRenovationPix from '../images/HomeRenovationPix.jpeg';
import './LandingPage.css';
import { useAuthUser } from "../Context/auth-context";
import firebase from "../firebaseConfig";
import SignInButton from "./SignInButton";


function Landing() {
  
    function logout() {
        firebase.auth().signOut();
      }
      
    //grabs use who is logged in
    const user = useAuthUser();

    return(
        <div className="parent">
            <div className="login-container">
                {/* <input type="text" placeholder="Username" name="username"></input>
                <input type="text" placeholder="Password" name="password"></input>
                <button type="submit">Login</button> */}
                
                { user ?
          <>
            {user.displayName} {' '}
            (<Link to="/me">My Shoutouts</Link>) {' '}
            <button onClick={logout}>Sign Out</button>
          </> :
          <SignInButton />
        }



                <NavLink to="/HomePage">Home Page</NavLink>
                <NavLink to="/Board">Go to Test Board</NavLink>
            </div>
            <h1 className="firstLine">Every home tells a story...</h1>
            <h1 className="secondLine">Let us help add another chapter to yours.</h1>

            <button className="landingBtn">Join Here</button>

        

        <img src={HomeRenovationPix} alt="renovation pix"/>
        </div>

    );
}

export default Landing;

