import ProductInterface from "../interfaces/ProductInterface";
import { Image, Button } from "react-bootstrap";
interface Props {
  product: ProductInterface;
}
const ProductDetail = ({ product }: Props) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-ld-2 row-cols-xl-2 my-3">
      <div className="col max-h-50">
        <Image src={product.image} fluid />
      </div>
      <div className="d-flex flex-column col pt-3 px-5">
        <h1>{product.name.toUpperCase()}</h1>
        <p className="mt-5 flex-1">{product.describe}</p>
        <div className="d-flex mt-auto mx-3 w-100 align-items-end flex-column">
          <h3>Price: {product.price}$ </h3>
          <Button style={{ width: "150px" }}>Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
