import { useParams } from "react-router-dom";
import Product from "../components/Product";
import ProductInterface from "../interfaces/ProductInterface";

interface Prop {
  productList: ProductInterface[];
}

const ProductPage = ({ productList }: Prop) => {
  //   const product: ProductInterface = {
  //     id: 0,
  //     name: "tomato",
  //     describe: "Fresh ande taste totmato from out best farmers.",
  //     image:
  //       "https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?w=826&t=st=1725277196~exp=1725277796~hmac=01aae49fcf67ead7a08d9b2d8f80b57c4c48e781a3dc9ae5fe942878d8a13ecb",
  //     price: 1,
  //   };
  const { id } = useParams();
  const productId = Number(id);
  const product = productList.find((product) => product.id === productId);
  return (
    <div>
      {product ? <Product product={product} /> : <h1>No product find.</h1>}
    </div>
  );
};

export default ProductPage;
