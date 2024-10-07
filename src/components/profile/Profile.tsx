import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContext";
import { ThemeContext } from "../../context/ThemeContext";
import ProfileShippingTab from "./ProfileShippingTab";
import ProfileEmailTab from "./ProfileEmailTab";
import ProfilePasswordTab from "./ProfilePasswordTab";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  if (user) {
    return (
      <div
        className="my-4 ms-3 ms-lg-0"
        data-bs-theme={`${isDark ? "dark" : "light"}`}
        data-theme={`${isDark ? "dark" : "light"}`}
      >
        <Tab.Container id="profile-tab" defaultActiveKey="first">
          <Row className="justify-content-center m-0">
            <Col md={2}>
              <Nav className="flex-column">
                <Nav.Item className={`my-1`}>
                  <Nav.Link
                    eventKey="first"
                    data-theme={`${isDark ? "dark" : "light"}`}
                  >
                    Shipping details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="my-1">
                  <Nav.Link
                    eventKey="second"
                    data-theme={`${isDark ? "dark" : "light"}`}
                  >
                    Change email
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="my-1">
                  <Nav.Link
                    eventKey="third"
                    data-theme={`${isDark ? "dark" : "light"}`}
                  >
                    Change password
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={4}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ProfileShippingTab user={user} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ProfileEmailTab user={user} />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <ProfilePasswordTab user={user} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

  return <div className="d-flex justify-content-center">There is no user.</div>;
};

export default Profile;
