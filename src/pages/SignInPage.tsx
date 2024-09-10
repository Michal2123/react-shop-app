import SignInForm from "../components/SignInForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  function changeIsSignIn() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="d-flex justify-content-center my-5">
      {isSignIn ? (
        <SignInForm changeIsSignIn={changeIsSignIn} />
      ) : (
        <RegisterForm changeIsSignIn={changeIsSignIn} />
      )}
    </div>
  );
};

export default SignInPage;
