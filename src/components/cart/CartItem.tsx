import { Button, Image } from "react-bootstrap";
import { useContext } from "react";
import { IProduct } from "../../interfaces/ProductInterface";
import { UpdateCartContext } from "../../context/CartContext";
import { CartActionKind } from "../../enum/CartEnum";

interface Prop {
  product: IProduct;
  count: number;
}

const CartItem = ({ product, count }: Prop) => {
  const { dispatch } = useContext(UpdateCartContext);

  function handleDeleteClick() {
    dispatch({ type: CartActionKind.DELETE, product });
  }

  function handleIncreseClick() {
    dispatch({ type: CartActionKind.INCRESECOUNT, product });
  }

  function handleDecreseClick() {
    count > 1
      ? dispatch({ type: CartActionKind.DECRESESECOUNT, product })
      : dispatch({ type: CartActionKind.DELETE, product });
  }

  return (
    <>
      <div className="row my-2 mx-1 align-items-center">
        <div className="col-12 col-lg-4">
          <Image src={product.image} fluid />
        </div>
        <div className="col-12 col-lg-6">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.describe}</p>
        </div>
        <div className="col-8 col-sm-6 col-lg-2 mt-3 mt-lg-0 ms-sm-auto ms-lg-0 mx-auto mx-sm-0">
          <div className="row text-center align-items-center">
            <Button
              className="col-3 col-md-4 col-lg-3 btn btn-secondary ms-auto mx-lg-auto my-0 p-0"
              style={{ maxWidth: "25px" }}
              onClick={handleDecreseClick}
            >
              -
            </Button>

            <p className="col-6 col-md-4 col-lg-6 mx-aut0 my-0 p-0">{count}</p>
            <Button
              className="col-3 col-md-4 col-lg-3 btn btn-secondary me-auto mx-lg-auto my-0 p-0"
              style={{ maxWidth: "25px" }}
              onClick={handleIncreseClick}
            >
              +
            </Button>
          </div>
          <div className="row">
            <Button
              className="col-12 mx-auto p-0 mt-2"
              style={{ maxWidth: "25px" }}
              onClick={handleDeleteClick}
            >
              x
            </Button>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default CartItem;
