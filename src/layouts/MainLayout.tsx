import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MainLayout = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      data-bs-theme={`${isDark ? "dark" : "light"}`}
      className={`main-layout-container ${
        isDark ? "dark-theme" : "light-theme"
      } `}
    >
      <Navbar />
      <div className="main-layout-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
