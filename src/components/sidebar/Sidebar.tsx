import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ProductsFilters from "../product/ProductFilters";

const Sidebar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`position-fixed vh-100 side-bar ${
        isDark ? "sidebar-dark" : "sidebar-ligth"
      } `}
    >
      <div className="mx-3" style={{ marginTop: " 25px" }}>
        <ProductsFilters buttonMargin="" />
      </div>
    </div>
  );
};

export default Sidebar;
