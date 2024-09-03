import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ProductsLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="products-layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
