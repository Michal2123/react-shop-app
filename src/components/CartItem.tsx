import { DraftFunction } from "use-immer";
import ProductInterface from "../interfaces/ProductInterface";
import { Image } from "react-bootstrap";

interface CartList {
  product: ProductInterface;
  count: number;
}

interface Prop {
  product: ProductInterface;
  count: number;
  updateCartList: (arg: CartList[] | DraftFunction<CartList[]>) => void;
}

const CartItem = ({ product, count, updateCartList }: Prop) => {
  function handleDeleteClick(id: number) {
    updateCartList((draft) => draft.filter((item) => item.product.id !== id));
  }

  function handleIncreseClick(id: number) {
    updateCartList((draft) => {
      draft.map((item) => item.product.id === id && item.count++);
    });
  }

  function handleDecreseClick(id: number) {
    updateCartList((draft) => {
      const item = draft.find((item) => item.product.id === id);
      if (item?.count && item.count > 1) {
        item.count--;
        return draft;
      }
      return draft.filter((item) => item.product.id !== id);
    });
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
              onClick={() => handleDecreseClick(product.id)}
            >
              -
            </p>
            <p className="d-inline mx-aut0 my-0 p-0">{count}</p>
            <p
              className="d-inline mx-auto my-0 p-0"
              onClick={() => handleIncreseClick(product.id)}
            >
              +
            </p>
          </div>
          <div className="row">
            <div
              className="col"
              style={{ textAlign: "center" }}
              onClick={() => handleDeleteClick(product.id)}
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
