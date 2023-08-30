import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SigninForm from "../../components/sign-in/signIn.component";
import "./authentication.style.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SigninForm />

      <SignUpForm />
    </div>
  );
}

export default Authentication;
