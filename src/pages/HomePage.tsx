import ProductList from "../components/ProductList";
import ProductInterface from "../interfaces/ProductInterface";

const HomePage = () => {
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
  ];

  return (
    <>
      <h1>Welcome!</h1>
      <p>This is the simple React application I made to show you my skills.</p>
      <ProductList productList={productList} />
    </>
  );
};

export default HomePage;
