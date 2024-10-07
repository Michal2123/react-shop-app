import React, { useContext, useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import { Placement } from "@popperjs/core/lib/enums";
import { UpdateCartContext } from "../../context/CartContext";
import { IProduct } from "../../interfaces/ProductInterface";
import { CartActionKind } from "../../enum/CartEnum";

interface Prop {
  product: IProduct;
  overlayPlacment?: Placement;
}

const ProductBuyButton: React.FunctionComponent<
  Prop & React.HTMLAttributes<HTMLDivElement>
> = ({ product, overlayPlacment, style }) => {
  const { dispatch } = useContext(UpdateCartContext);
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  let timeoutId = setTimeout(() => {});

  function handleClickBuy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    clearTimeout(timeoutId);
    setShow(!show);
    setTarget(e.currentTarget);
    timeoutId = setTimeout(() => setShow((show) => !show), 750);
    dispatch({ type: CartActionKind.ADD, product });
  }
  return (
    <div ref={ref}>
      <Button onClick={handleClickBuy} style={style}>
        Buy
      </Button>
      <Overlay
        show={show}
        target={target}
        placement={overlayPlacment}
        container={ref}
        containerPadding={20}
      >
        <Popover>
          <Popover.Body>added to cart.</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProductBuyButton;
