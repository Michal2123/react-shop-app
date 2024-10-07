const Footer = () => {
  return (
    <footer className="footer-container">
      <div
        className="row row-col-2 ms-auto my-3 w-50 me-5 mt-2"
        style={{ maxWidth: "500px" }}
      >
        <h2>Contact</h2>
        <div className="row row-col-2">
          <div className="col my-2">
            <h4>Phone:</h4>
            <p className="m-0">999-99-99</p>
            <h5 className="my-2">or</h5>
            <p className="m-0">992-89-99</p>
          </div>
          <div className="col my-2">
            <h4>Mail:</h4>
            <p>shop@shop.com</p>
          </div>
          <div className="col my-2">
            <h4>Adress:</h4>
            <p className="m-0">Main Street, 55</p>
            <p className="m-0">Warsaw, 00-000</p>
            <p className="m-0">Poland</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
