import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartProvider from "../components/CartProvider";
import ProductProvider from "../components/ProductProvider";
import AuthenticationProvider from "../components/AuthenticationProvider";
import HistoryProvider from "../components/HistoryProvider";
import ErrorProvider from "../components/ErrorProvider";

const MainLayout = () => {
  return (
    <AuthenticationProvider>
      <ErrorProvider>
        <ProductProvider>
          <CartProvider>
            <HistoryProvider>
              <div className="main-layout-container">
                <Navbar />
                <div className="main-layout-main">
                  <Outlet />
                </div>
                <Footer />
              </div>
            </HistoryProvider>
          </CartProvider>
        </ProductProvider>
      </ErrorProvider>
    </AuthenticationProvider>
  );
};

export default MainLayout;
