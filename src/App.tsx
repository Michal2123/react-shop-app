import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductsLayout from "./layouts/ProductsLayout";
import ProductInterface from "./interfaces/ProductInterface";

function App() {
  const productList: ProductInterface[] = [
    {
      id: 0,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 1,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 2,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 3,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 4,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 5,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 6,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 7,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 8,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 9,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
    {
      id: 10,
      name: "tomato",
      describe: "Fresh ande taste totmato from out best farmers.",
      image:
        "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
      price: 1,
    },
  ];
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
