import { IProduct } from "../interfaces/ProductInterface";
import {
  FilterProductContext,
  ProductContext,
} from "../context/ProductContext";
import { IFilterProducts } from "../interfaces/SideBarInterface";
import { useEffect, useState } from "react";
const ProductProvider = ({ children }: any) => {
  const [fechedData, setFechedData] = useState<IProduct[]>([]);
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    let didFetch = false;
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        if (!didFetch) {
          setFechedData(data);
          setProductList(data);
        }
      });
    return () => {
      didFetch = true;
    };
  }, []);

  function filterProductList({ filters, priceRange }: IFilterProducts) {
    let tempItems: IProduct[];
    if (filters.length > 0) {
      tempItems = filters
        .map((selectedFilter) => {
          const temp = fechedData.filter(
            (item) =>
              item.category === selectedFilter && item.price <= priceRange
          );
          return temp;
        })
        .flat()
        .sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
      tempItems = fechedData.filter((item) => item.price <= priceRange);
    }

    setProductList(tempItems);
  }

  function resetProductList() {
    setProductList(fechedData);
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
