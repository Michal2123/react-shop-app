import { useContext } from "react";
import { Form } from "react-bootstrap";
import { ThemeContext, UpdateThemeContext } from "../../context/ThemeContext";

const NavbarThemeSwitch = () => {
  const { isDark } = useContext(ThemeContext);
  const { updateTheme } = useContext(UpdateThemeContext);
  return (
    <Form className="d-flex flex-column justify-content-center p-0 my-md-0 mx-3">
      <div>
        {!isDark ? <div className="d-inline">&#9788;</div> : null}
        <Form.Check
          className="navbar-switch d-inline mx-1"
          type="switch"
          checked={isDark}
          onChange={(e) => updateTheme(e.target.checked)}
        />
        {isDark ? <div className="d-inline">&#9790;</div> : null}
      </div>
    </Form>
  );
};

export default NavbarThemeSwitch;
