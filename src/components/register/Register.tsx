import { useState } from "react";
import RegisterStepController from "./RegisterStepController";

const Register = () => {
  const [isStepTwo, setIsStepTwo] = useState(false);

  function handleNextStep() {
    setIsStepTwo(true);
  }

  return (
    <RegisterStepController
      isStepTwo={isStepTwo}
      handleNextStep={handleNextStep}
    />
  );
};

export default Register;
