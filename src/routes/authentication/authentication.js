import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../component/sign-up-form/sign-up-form";
import SignInForm from "../../component/sign-in-form/sign-in-form";
import Button from "../../component/button/button";
import "./authentication.styles.scss";

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
