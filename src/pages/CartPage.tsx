import ProductInterface from "../interfaces/ProductInterface";
import { Image, Button } from "react-bootstrap";

interface Prop {
  productList: ProductInterface[];
}

const CartPage = ({ productList }: Prop) => {
  return (
    <div className="card w-50 mx-auto my-5">
      <div className="card-body row row-col-2 row-col-md-2 row-col-lg-3">
        {productList.map((product) => (
          <div key={product.id}>
            <div className="row my-2">
              <div
                className="col"
                style={{
                  maxWidth: "150px",
                  minWidth: "125px",
                }}
              >
                <Image src={product.image} fluid />
              </div>
              <div className="col">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.describe}</p>
              </div>
              <div className="col my-auto" style={{ maxWidth: "100px" }}>
                <div className="row row-col-3">
                  <p className="col ">-</p>
                  <p className="col">1</p>
                  <p className="col">+</p>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "center" }}>
                    x
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3" />
          </div>
        ))}
        <h5 style={{ textAlign: "end" }}>Price: 555$</h5>
        <Button
          className="mx-auto"
          style={{ maxWidth: "300px", marginTop: "50px" }}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
