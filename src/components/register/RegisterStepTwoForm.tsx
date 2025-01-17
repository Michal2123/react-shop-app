import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IRegisterData } from "../../interfaces/RegisterInterface";
import { ThemeContext } from "../../context/ThemeContext";
import ShippingDetailForm from "../utlis/ShippingDetailForm";
import { IShippingDetails } from "../../interfaces/ProfileInterface";
import { useError } from "../providers/ErrorProvider";
import { UpdateAuthContext } from "../../context/AuthenticationContext";
import { Register } from "../../service/RegisterService";

interface Prop {
  registerData: IRegisterData;
}

const RegisterStepTwoForm = ({ registerData }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const { clearErrorMessage, handleError } = useError();
  const navigate = useNavigate();

  const { logIn } = useContext(UpdateAuthContext);

  function handleSubmit(shippingdetails: IShippingDetails) {
    registerData = {
      ...registerData,
      ...shippingdetails,
    };
    setIsLoading(true);
    Register(registerData)
      .then((token) => {
        logIn({
          accessToken: token,
          user: {
            ...registerData,
          },
        });
        navigate("/");
      })
      .catch((error: Error) => {
        clearErrorMessage();
        handleError(error.message, "Unable to register.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className={`card p-3 my-2`} data-bs-theme={isDark ? "dark" : "light"}>
      <ShippingDetailForm
        title="Register"
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        buttonText="Register"
        children={
          <Form.Group className="mb-3">
            <Form.Text>
              Already have account?
              <NavLink
                style={{
                  color: `${isDark ? "darkcyan" : "blue"}`,
                  cursor: "pointer",
                }}
                to={"/signin"}
              >
                {" "}
                Sign in
              </NavLink>
            </Form.Text>
          </Form.Group>
        }
      />
    </div>
  );
};

export default RegisterStepTwoForm;
