import { useState } from "react";
import RegisterStepOneForm from "./RegisterStepOneForm";
import RegisterStepTwoForm from "./RegisterStepTwoForm";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  zipCode: string;
  address: string;
  password: string;
}

const Register = () => {
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [registerData, setRegisterData] = useState<RegisterData>({
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

  async function sendData(): Promise<Response> {
    return await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...registerData,
        token: "lshbdfouwegrlqweh2138uelkn",
      }),
    });
  }

  return (
    <>
      {isStepTwo ? (
        <RegisterStepTwoForm
          registerData={registerData}
          sendData={sendData}
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
