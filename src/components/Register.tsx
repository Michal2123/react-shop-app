import { useState } from "react";
import RegisterStepOneForm from "./RegisterStepOneForm";
import RegisterStepTwoForm from "./RegisterStepTwoForm";
import { IRegisterData } from "../interfaces/RegisterInterface";

const Register = () => {
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [registerData, setRegisterData] = useState<IRegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    address: "",
    zipCode: "",
    password: "",
  });

  function updateRegiterData(name: string, value: string) {
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  function handleNextStep() {
    setIsStepTwo(true);
  }

  return (
    <>
      {isStepTwo ? (
        <RegisterStepTwoForm
          registerData={registerData}
          updateRegisterData={updateRegiterData}
        />
      ) : (
        <RegisterStepOneForm
          registerData={registerData}
          handleNextStep={handleNextStep}
          updateRegisterData={updateRegiterData}
        />
      )}
    </>
  );
};

export default Register;
