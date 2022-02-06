import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import productOne from "../../img/product1.jpg";
import productTwo from "../../img/product2.jpg";
import "./productCarocell.css";

const ProductCarocell = () => {
  var options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="container_comman welcome_container bg_co product_carocell">
      <h3 class="heading_section">
        Welcome to Uni Biotech Healthcare Pvt. Ltd.
      </h3>
      <ReactOwlCarousel className="owl-theme" {...options}>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
        <div class="item">
          <img src={productOne} alt="" />
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default ProductCarocell;
