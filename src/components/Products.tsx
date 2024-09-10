import { useState } from "react";
import { IProduct } from "../interfaces/ProductInterface";
import { ProductListPage } from "../enum/ProductListEnum";
import ProductsList from "./ProductList";
import ProductListPaging from "./ProductListPaging";

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

  let paginateList: IProduct[] = calcProductPerPage();

  function calcProductPerPage(): IProduct[] {
    return prevList.slice(
      (page - 1) * ProductListPage.ITEMSPERPAGE,
      page * ProductListPage.ITEMSPERPAGE
    );
  }

  return (
    <>
      {paginateList.length > 0 ? (
        <>
          <ProductsList productList={paginateList} />
          <ProductListPaging
            page={page}
            productList={productList}
            setPage={setPage}
          />
        </>
      ) : null}
    </>
  );
};

export default Products;
