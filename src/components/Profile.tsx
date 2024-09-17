import { Col, Nav, Row, Tab } from "react-bootstrap";
import ProfileShippingTab from "./ProfileShippingTab";
import ProfileEmailTab from "./ProfileEmailTab";
import ProfilePasswordTab from "./ProfilePasswordTab";
import { useContext } from "react";
import {
  AuthContext,
  UpdateAuthContext,
} from "../context/AuthenticationContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { logIn } = useContext(UpdateAuthContext);
  if (user) {
    return (
      <div className="my-4">
        <Tab.Container id="profile-tab" defaultActiveKey="first">
          <Row className="justify-content-center">
            <Col md={2}>
              <Nav className="flex-column">
                <Nav.Item className="my-1">
                  <Nav.Link eventKey="first">Shipping details</Nav.Link>
                </Nav.Item>
                <Nav.Item className="my-1">
                  <Nav.Link eventKey="second">Change email</Nav.Link>
                </Nav.Item>
                <Nav.Item className="my-1">
                  <Nav.Link eventKey="third">Change password</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={4}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ProfileShippingTab user={user} updateUser={logIn} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ProfileEmailTab user={user} updateUser={logIn} />
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
