import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4M2Cm-RGrDIPtXnM2BOqXULX8hc7A-jE",
    authDomain: "fixit-home-improvement.firebaseapp.com",
    projectId: "fixit-home-improvement",
    storageBucket: "fixit-home-improvement.appspot.com",
    messagingSenderId: "544061868920",
    appId: "1:544061868920:web:2dbe2208befc6f6115968d"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;

//handles popup to sign in
export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}

export function signOut(): void {
  firebase.auth().signOut();
}