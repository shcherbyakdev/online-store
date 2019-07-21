import React from "react";

import { SignIn, SignUp } from "../../components";

import "./sign-in-and-sign-up-page.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
