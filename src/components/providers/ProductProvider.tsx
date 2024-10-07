import { ReactNode, useEffect, useState } from "react";
import { IFilterProducts, IProduct } from "../../interfaces/ProductInterface";
import { GetAllProducts } from "../../service/ProductService";
import {
  ProductContext,
  UpdateProductContext,
} from "../../context/ProductContext";

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

  function filterProductList({ categorys, priceRange }: IFilterProducts) {
    let tempItems: IProduct[];
    if (categorys.length > 0) {
      tempItems = categorys
        .map((selectedCategory) => {
          const temp = fechedData.filter(
            ({ category, price }) =>
              category === selectedCategory && price <= priceRange
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
      <UpdateProductContext.Provider
        value={{ filterProductList, resetProductList }}
      >
        {children}
      </UpdateProductContext.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
