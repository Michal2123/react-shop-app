import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContext";
import { ThemeContext } from "../../context/ThemeContext";
import ProfileShippingTab from "./ProfileShippingTab";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  if (user) {
    return (
      <div
        className="my-5 ms-3 ms-lg-0"
        data-bs-theme={`${isDark ? "dark" : "light"}`}
        data-theme={`${isDark ? "dark" : "light"}`}
      >
        <div className="d-flex justify-content-center">
          <ProfileShippingTab user={user} />
        </div>
      </div>
    );
  }

  return <div className="d-flex justify-content-center">There is no user.</div>;
};

export default Profile;
