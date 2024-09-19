import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductFilterPopup from "../components/ProductFilterPopup";
import FloatingFilterButton from "../components/FloatingFilterButton";
import ProductFilterProvider from "../components/ProductFilterProvider";
import { useState } from "react";

const ProductsLayout = () => {
  const [showPopup, setShowPopup] = useState(false);

  function updatePopupState() {
    setShowPopup(!showPopup);
  }

  return (
    <div className="d-flex">
      <ProductFilterProvider>
        <Sidebar />
        <div className="products-layout-content">
          <ProductFilterPopup
            showPopup={showPopup}
            updatePopupState={updatePopupState}
          />
          <Outlet />
          <FloatingFilterButton updatePopupState={updatePopupState} />
        </div>
      </ProductFilterProvider>
    </div>
  );
};

export default ProductsLayout;
