import { useState } from "react";
import { signInWithGooglePopup, signInWithGoogleEmailAndPassword, createUserDocumentFromAuth } from "../../Utilities/firebase/firebase.utils";

import "./signIn.style.scss";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultForm = {
  displayName: "",
  email: "",
  pw: "",
  cpw: "",
};

function SigninForm() {
  const [formVal, setFormVal] = useState(defaultForm);
  const { email, pw } = formVal;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
    // console.log(formVal);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const resetFormField = () => {
    setFormVal(defaultForm);
  };

  const HangleSignInWithPW = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithGoogleEmailAndPassword(email, pw);
      console.log(response);
      resetFormField();
    } catch (error) {
      console.log(error);
    }
  };

  const logRedirectedGoogleUser = async () => {};
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form>
        <FormInput label="Email" type="email" id="emaild" name="email" required value={email} onChange={handleChange} />

        <FormInput label="Password" type="password" id="pwd" name="pw" required value={pw} onChange={handleChange} />

        <div className="buttons-container">
          <Button type="submit" onClick={HangleSignInWithPW} buttonType="inverted">
            Sign In
          </Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>

        {/* <Button buttonType="google" onClick={logRedirectedGoogleUser}>
          Sign in with Google Redirect
        </Button> */}
      </form>
    </div>
  );
}

export default SigninForm;
