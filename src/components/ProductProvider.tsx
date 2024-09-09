import { IProduct } from "../interfaces/ProductInterface";
import myData from "../assets/Mockdb.json";
import {
  FilterProductContext,
  ProductContext,
} from "../context/ProductContext";
import { IFilterProducts } from "../interfaces/SideBarInterface";
import { useEffect, useState } from "react";
const data: IProduct[] = myData;
const ProductProvider = ({ children }: any) => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    setProductList(myData);
  }, []);

  function filterProductList(filter: IFilterProducts) {
    if (filter.filters.length > 0) {
      let tempItems = filter.filters.map((selectedFilter) => {
        let temp = data.filter(
          (item) =>
            item.category === selectedFilter && item.price <= filter.priceRange
        );
        return temp;
      });

      setProductList(tempItems.flat().sort((a, b) => (a.id > b.id ? 1 : -1)));
      return;
    }

    const tempData = data.filter((item) => item.price <= filter.priceRange);

    setProductList(tempData);
  }

  return (
    <ProductContext.Provider value={{ productList: productList }}>
      <FilterProductContext.Provider
        value={{ updateProductList: filterProductList }}
      >
        {children}
      </FilterProductContext.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
