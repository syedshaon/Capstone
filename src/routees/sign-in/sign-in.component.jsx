import { signInWithGooglePopup } from "../../Utilities/firebase/firebase.utils";
import "./sign-in.style.scss";

import { createUserDocumentFromAuth } from "../../Utilities/firebase/firebase.utils";

function Signin() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}

export default Signin;
