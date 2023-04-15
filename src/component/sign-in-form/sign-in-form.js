import "./sign-in-form.styles.scss";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

const defaultFormFields = {
  password: "",
  email: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, email } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user asocciated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const field = event.target.name;
    setFormFields({ ...formFields, [field]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your e-mail and password</span>
      <div>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="E-mail"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            autoComplete="off"
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            autoComplete="off"
          />
          <div className="button-container1">
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType="google"
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
