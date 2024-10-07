import { useState } from "react";
import { IRegisterData } from "../../interfaces/RegisterInterface";
import RegisterStepOneForm from "./RegisterStepOneForm";
import RegisterStepTwoForm from "./RegisterStepTwoForm";

interface Prop {
  isStepTwo: boolean;
  handleNextStep: () => void;
}

const RegisterStepController = ({ isStepTwo, handleNextStep }: Prop) => {
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
  return (
    <>
      {isStepTwo ? (
        <RegisterStepTwoForm registerData={registerData} />
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

export default RegisterStepController;
