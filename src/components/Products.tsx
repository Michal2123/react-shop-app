import { useEffect, useState } from "react";
import { IProduct, IProductListPage } from "../interfaces/ProductInterface";
import { ProductListPage } from "../enum/ProductListEnum";
import ProductsList from "./ProductList";
import ProductListPaging from "./ProductListPaging";

interface Prop {
  productList: IProduct[];
}

const Products = ({ productList }: Prop) => {
  const [{ page, localProductList }, setPagingObject] =
    useState<IProductListPage>({
      page: 1,
      localProductList: [],
    });

  useEffect(() => {
    calcProductPerPage(productList, 1);
  }, [productList]);

  function calcProductPerPage(productList: IProduct[], page: number) {
    const tempList = productList.slice(
      (page - 1) * ProductListPage.ITEMSPERPAGE,
      page * ProductListPage.ITEMSPERPAGE
    );
    setPagingObject({
      page,
      localProductList: tempList,
    });
  }

  return (
    <>
      <ProductsList productList={localProductList} />
      <ProductListPaging
        page={page}
        productList={productList}
        calcProductPerPage={calcProductPerPage}
      />
    </>
  );
};

export default Products;
