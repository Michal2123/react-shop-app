import Carousel from "../components/Carousel";
import ProductInterface from "../interfaces/ProductInterface";

interface Prop {
  productList: ProductInterface[];
}

const HomePage = ({ productList }: Prop) => {
  return (
    <div className="home-page-container">
      <section className="home-page-top-section">
        <h1>Welcome on my site.</h1>
        <p>I create this website to present you my skills.</p>
      </section>
      <Carousel productList={productList} />
    </div>
  );
};

export default HomePage;
