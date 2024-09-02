const Navbar = () => {
  return (
    <nav
      className="navbar-light navbar navbar-dark d-flex justify-content-between"
      style={{ height: 75 }}
    >
      <div className="d-flex w-25">
        <p className=" mx-auto mb-0 align-middle">navbar</p>
      </div>

      <div className="d-flex w-50 h-75  navbar-form justify-content-center">
        <input className=" w-75  navbar-input" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="d-flex w-25">
        <p className="mx-auto mb-0  align-middle ">Button</p>
      </div>
    </nav>
  );
};

export default Navbar;
