import { Carousel, Image } from "react-bootstrap";
import ProductInterface from "../interfaces/ProductInterface";

interface Prop {
  productList: ProductInterface[];
}

const CarouselComponent = ({ productList }: Prop) => {
  const shortproductList = productList.slice(0, 3);
  return (
    <Carousel className="home-page-carousel" data-bs-theme="dark">
      {shortproductList.map((product) => (
        <Carousel.Item key={product.id}>
          <div className="d-flex justify-content-center">
            <Image src={product.image} fluid />
          </div>
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.describe}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
