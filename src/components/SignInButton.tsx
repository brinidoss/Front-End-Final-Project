import firebase, {authProvider} from '../firebaseConfig';

function signIn() {
  firebase.auth().signInWithPopup(authProvider);
}

function SignInButton() {
  return (
    <button className="SignInButton" onClick={signIn}>Sign in with Google</button>
  );
}

export default SignInButton;