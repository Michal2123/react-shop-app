import { IProduct } from "../interfaces/ProductInterface";
import {
  FilterProductContext,
  ProductContext,
} from "../context/ProductContext";
import { IFilterProducts } from "../interfaces/SideBarInterface";
import { ReactNode, useEffect, useState } from "react";
import { GetAllProducts } from "../service/ProductService";

interface Prop {
  children: ReactNode;
}

const ProductProvider = ({ children }: Prop) => {
  const [fechedData, setFechedData] = useState<IProduct[]>([]);
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    let didFetch = false;
    GetAllProducts()
      .then((data) => {
        if (!didFetch) {
          setFechedData(data);
          setProductList(data);
        }
      })
      .catch((error: Error) => {
        console.log(error);
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
            ({ category, price }) =>
              category === selectedFilter && price <= priceRange
          );
          return temp;
        })
        .flat()
        .sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
      tempItems = fechedData.filter(({ price }) => price <= priceRange);
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
