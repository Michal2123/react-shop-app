import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useEffect } from "react";
import ProductInterface from "../interfaces/ProductInterface";
import { DraftFunction, useImmer } from "use-immer";

interface CartList {
  product: ProductInterface;
  count: number;
}

interface CartContext {
  cartList: CartList[];
  updateCartList(arg: CartList[] | DraftFunction<CartList[]>): void;
}

function getInitialCartState() {
  const json = localStorage.getItem("cartList");
  return json !== null ? (JSON.parse(json) as CartList[]) : [];
}

const cartContext = createContext<CartContext>({
  cartList: [],
  updateCartList: () => undefined,
});

const MainLayout = () => {
  const [cartList, updateCartList] = useImmer<CartList[]>(
    getInitialCartState()
  );
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <cartContext.Provider value={{ cartList, updateCartList }}>
      <div className="main-layout-container">
        <Navbar />
        <div className="main-layout-main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </cartContext.Provider>
  );
};

export { MainLayout as default, cartContext };
