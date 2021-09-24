import firebase, {authProvider} from '../firebaseConfig';
import '../styles/SignInButton.css';

function signIn() {
  firebase.auth().signInWithPopup(authProvider);
}

function SignInButton() {
  return (
    <button className="SignInButton" onClick={signIn}>Join Here</button>
  );
}

export default SignInButton;