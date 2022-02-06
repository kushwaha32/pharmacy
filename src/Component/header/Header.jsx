import "./header.css";
import brandImg from "../../img/brand.png";
import { useState } from "react";

const Header = () => {
  const [headerNavActive, setHeaderNavActive] = useState(false);
  const toggleNav = () => {
    setHeaderNavActive(!headerNavActive);
  };
  return (
    <div className="container_comman header_container">
      <div className="header_first_layer">
        <div className="logo_brand">
          <img src={brandImg} alt="" />
        </div>
        <div className="contacts">
          <figure>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <figcaption>raj639kushwaha@gmail.com</figcaption>
          </figure>
          <figure>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <figcaption>+91 8355024835</figcaption>
          </figure>
        </div>
      </div>
      <div className="header_second_layer">
        <div className="hamburger_toggle_btn">
          <i className="fa fa-bars" onClick={() => toggleNav()}></i>
        </div>
        <ul
          className={`header_nav ${headerNavActive ? "header_nav_active" : ""}`}
        >
          <li className="sm_brnd_holder">
            <img src={brandImg} alt="" />
            <i
              class="fa fa-times-circle-o"
              aria-hidden="true"
              onClick={() => toggleNav()}
            ></i>
          </li>
          <li>
            <a className="active_nav" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">Glossary</a>
          </li>
          <li>
            <a href="">Boxes & Packing</a>
          </li>
          <li>
            <a href="">LBL’s Product</a>
          </li>
          <li>
            <a href="">Visual Aid</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Product List</a>
          </li>
          <li>
            <a href="">Certificates</a>
          </li>
          <li>
            <a href="">Enquiry</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
