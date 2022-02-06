import Carocellslider from "./Component/carocelSlider/CarocellSlider";
import Contactus from "./Component/contactus/Contactus";
import Footer from "./Component/footer/Footer";
import Header from "./Component/header/Header";
import ProductCarocell from "./Component/productCarocel/ProductCarocell";
import Welcome from "./Component/welcome/Welcome";

function App() {
  return (
    <>
      <Header />
      <Carocellslider />
      <Welcome />
      <ProductCarocell />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
