import { useState } from "react";
import { IProduct } from "../interfaces/ProductInterface";
import { ProductListPage } from "../enum/ProductListEnum";
import ProductsList from "./ProductList";
import Paging from "./Paging";
import { calcItemsPerPage } from "../utlis/Calculations";

interface Prop {
  productList: IProduct[];
}

const Products = ({ productList }: Prop) => {
  const [page, setPage] = useState(1);
  const [prevList, setPrevList] = useState(productList);
  if (prevList !== productList) {
    setPrevList(productList);
    setPage(1);
  }

  const pageCount = Math.ceil(
    productList.length / ProductListPage.ITEMSPERPAGE
  );

  const paginateList: IProduct[] = calcItemsPerPage(
    prevList,
    page,
    ProductListPage.ITEMSPERPAGE
  );

  if (paginateList.length) {
    return (
      <div>
        <ProductsList productList={paginateList} />
        {pageCount > 1 ? (
          <Paging
            page={page}
            maxVisiblePages={pageCount}
            maxPageCount={pageCount}
            setPage={setPage}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <h5>Product list is empy.</h5>
    </div>
  );
};

export default Products;
