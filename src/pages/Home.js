
import { Fragment } from "react";
import Slider from "../Component/ImageSlider/Slider";
import ProductCard from "./ProductCard";

const Home = () => {
    return  (
<Fragment>
    <Slider/>
      <ProductCard />
    </Fragment>
  );
}

export default Home;