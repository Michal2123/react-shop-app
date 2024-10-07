import { Image } from "react-bootstrap";
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
          <div className="d-flex">
            <p
              className="d-inline mx-auto my-0 p-0"
              onClick={handleDecreseClick}
            >
              -
            </p>
            <p className="d-inline mx-aut0 my-0 p-0">{count}</p>
            <p
              className="d-inline mx-auto my-0 p-0"
              onClick={handleIncreseClick}
            >
              +
            </p>
          </div>
          <div className="row">
            <div
              className="col"
              style={{ textAlign: "center" }}
              onClick={handleDeleteClick}
            >
              x
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default CartItem;
