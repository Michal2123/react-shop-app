import ProductsFilters from "./ProductFilters";

const Sidebar = () => {
  return (
    <div className="position-fixed vh-100 sidebar-ligth side-bar ">
      <div className="mx-3" style={{ marginTop: " 25px" }}>
        <ProductsFilters buttonMargin="" />
      </div>
    </div>
  );
};

export default Sidebar;
