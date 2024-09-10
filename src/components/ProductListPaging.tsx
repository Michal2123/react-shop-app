import { Button } from "react-bootstrap";
import { ProductListPage } from "../enum/ProductListEnum";
import { IProduct } from "../interfaces/ProductInterface";

interface Prop {
  productList: IProduct[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductListPaging = ({ productList, page, setPage }: Prop) => {
  const pageCount = Math.ceil(
    productList.length / ProductListPage.ITEMSPERPAGE
  );

  function handleClickPage(page: number) {
    window.scrollTo(0, 0);
    setPage(page);
  }

  return (
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
  );
};

export default ProductListPaging;
