import { useContext } from "react";
import { Form } from "react-bootstrap";
import { ThemeContext, UpdateThemeContext } from "../../context/ThemeContext";

const NavbarThemeSwitch = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  const { isDark } = useContext(ThemeContext);
  const { updateTheme } = useContext(UpdateThemeContext);
  return (
    <div className={className}>
      <Form className="d-flex flex-column justify-content-center p-0 my-md-0 mx-3">
        <div style={{ flexWrap: "nowrap", minWidth: "50px" }}>
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
    </div>
  );
};

export default NavbarThemeSwitch;
