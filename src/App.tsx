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
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRout from "./components/ProtectedRout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsPage />} />
        </Route>
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route element={<ProtectedRout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
