import { IProduct } from "../interfaces/ProductInterface";
import myData from "../assets/Mockdb.json";
import {
  FilterProductContext,
  ProductContext,
} from "../context/ProductContext";
import { IFilterProducts } from "../interfaces/SideBarInterface";
import { useState } from "react";

const data: IProduct[] = myData;
const ProductProvider = ({ children }: any) => {
  const [productList, setProductList] = useState<IProduct[]>(data);

  function filterProductList({ filters, priceRange }: IFilterProducts) {
    let tempItems: IProduct[];
    if (filters.length > 0) {
      tempItems = filters
        .map((selectedFilter) => {
          const temp = data.filter(
            (item) =>
              item.category === selectedFilter && item.price <= priceRange
          );
          return temp;
        })
        .flat()
        .sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
      tempItems = data.filter((item) => item.price <= priceRange);
    }

    setProductList(tempItems);
  }

  function resetProductList() {
    setProductList(myData);
  }

  return (
    <ProductContext.Provider value={{ productList: productList }}>
      <FilterProductContext.Provider
        value={{ filterProductList, resetProductList }}
      >
        {children}
      </FilterProductContext.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
