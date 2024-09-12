import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartProvider from "../components/CartProvider";
import ProductProvider from "../components/ProductProvider";
import AuthenticationProvider from "../components/AuthenticationProvider";

const MainLayout = () => {
  return (
    <AuthenticationProvider>
      <ProductProvider>
        <CartProvider>
          <div className="main-layout-container">
            <Navbar />
            <div className="main-layout-main">
              <Outlet />
            </div>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </AuthenticationProvider>
  );
};

export default MainLayout;
