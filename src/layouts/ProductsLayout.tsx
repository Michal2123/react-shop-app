import { Outlet } from "react-router-dom";
import FloatingFilterButton from "../components/sidebar/FloatingFilterButton";
import { useState } from "react";
import ProductFilterProvider from "../components/providers/ProductFilterProvider";
import Sidebar from "../components/sidebar/Sidebar";
import ProductFilterPopup from "../components/product/ProductFilterPopup";

const ProductsLayout = () => {
  const [showPopup, setShowPopup] = useState(false);

  function updatePopupState() {
    setShowPopup(!showPopup);
  }

  return (
    <div className="d-flex">
      <ProductFilterProvider>
        <Sidebar />
        <div className="products-layout-content w-100">
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
