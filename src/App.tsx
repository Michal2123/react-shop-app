import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductsLayout from "./layouts/ProductsLayout";
import ProductInterface from "./interfaces/ProductInterface";
import myData from "./assets/Mockdb.json";

function App() {
  const productList: ProductInterface[] = myData;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage productList={productList} />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsPage productList={productList} />} />
        </Route>
        <Route
          path="/products/:id"
          element={<ProductPage productList={productList} />}
        />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
