import { useContext, useEffect, useState } from "react";
import { IProduct } from "../interfaces/ProductInterface";
import Product from "./Product";
import { CartContext, UpdateCartContext } from "../context/CartContext";
import { CartActionKind } from "../enum/CartEnum";
import { Button } from "react-bootstrap";

interface Prop {
  productList: IProduct[];
}

const ProductList = ({ productList }: Prop) => {
  const [page, setPage] = useState(1);
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  const { cartList } = useContext(CartContext);
  const { dispatch } = useContext(UpdateCartContext);

  useEffect(() => {
    setProductsList(ProductListPage(productList, 1, 12));
  }, [productList]);

  const pageCount = Math.ceil(productList.length / 12);

  function handleClickBuy(product: IProduct) {
    cartList.find((a) => a.product.id === product.id)
      ? dispatch({ type: CartActionKind.INCRESECOUNT, product })
      : dispatch({ type: CartActionKind.ADD, product });
  }

  function handleClickPage(page: number) {
    window.scrollTo(0, 0);
    const productListPage = ProductListPage(productList, page, 12);
    setPage(page);
    setProductsList(productListPage);
  }

  function ProductListPage(
    productList: IProduct[],
    page: number,
    size: number
  ) {
    return productList.slice((page - 1) * size, page * size);
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-0">
        {productsList.map((product) => (
          <div key={product.id} className="col p-0">
            <Product product={product} onBuyClick={handleClickBuy} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        {Array.from({ length: pageCount }, (_, k) => (
          <Button
            className={`${
              page !== k + 1 ? `btn-secondary` : `btn-primary`
            } mx-2 my-2`}
            style={{ display: "inline-block" }}
            key={k}
            onClick={() => handleClickPage(k + 1)}
          >
            {k + 1}
          </Button>
        ))}
      </div>
    </>
  );
};

export default ProductList;
