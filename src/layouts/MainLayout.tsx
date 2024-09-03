import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <Navbar />
      <div className="main-layout-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
