import { useContext } from "react";
import Carousel from "../components/utlis/Carousel";
import { ProductContext } from "../context/ProductContext";

const HomePage = () => {
  const { productList } = useContext(ProductContext);
  return (
    <div className="home-page-container mt-4">
      <section className="home-page-top-section">
        <h1>Welcome on my site.</h1>
        <p>I create this website to present you my skills.</p>
      </section>
      <Carousel productList={productList} />
    </div>
  );
};

export default HomePage;
