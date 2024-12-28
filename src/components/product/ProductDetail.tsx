import { Image } from "react-bootstrap";
import ProductBuyButton from "./ProductBuyButton";
import { IProduct } from "../../interfaces/ProductInterface";

interface Prop {
  product: IProduct;
}
const ProductDetail = ({ product }: Prop) => {
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
          <ProductBuyButton product={product} style={{ width: "150px" }} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
