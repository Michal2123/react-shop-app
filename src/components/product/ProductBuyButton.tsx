import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { UpdateCartContext } from "../../context/CartContext";
import { IProduct } from "../../interfaces/ProductInterface";
import { CartActionKind } from "../../enum/CartEnum";

interface Prop {
  product: IProduct;
}

const ProductBuyButton: React.FunctionComponent<
  Prop & React.HTMLAttributes<HTMLDivElement>
> = ({ product, style }) => {
  const { dispatch } = useContext(UpdateCartContext);
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  let [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  function handleClickBuy() {
    clearTimeout(timeoutId);
    setShow(true);
    setTimeoutId(setTimeout(() => setShow(false), 750));
    dispatch({ type: CartActionKind.ADD, product });
  }

  return (
    <div ref={ref} className="position-relative">
      <Button onClick={handleClickBuy} style={style}>
        Buy
      </Button>
      {show ? (
        <div className="position-absolute bottom-100 translate-middle buy-popup-info">
          Added to cart
        </div>
      ) : null}
    </div>
  );
};

export default ProductBuyButton;
