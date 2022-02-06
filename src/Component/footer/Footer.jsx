import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container_comman footer_container">
        <div className="left_section foot_com">
          <h3 className="footer_title">Quick Links</h3>
          <ul>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Boxes & Packing</a>
            </li>
            <li>
              <a href="">Enquiry Form</a>
            </li>
            <li>
              <a href="">Glossary</a>
            </li>
            <li>
              <a href="">LBL’s Product</a>
            </li>
            <li>
              <a href="">Visual Aid</a>
            </li>
          </ul>
        </div>
        <div className="middle_section foot_com">
          <h3 className="footer_title">Contact Address</h3>
          <ul>
            <li>Mr. Prakash kushwaha(Director)</li>
            <li>
              Address:{" "}
              <span>
                150A/4chak meerapatti
                <br /> Prayag India
              </span>
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
              something@gmail.com
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i> 1234567890
            </li>
          </ul>
        </div>
        <div className="right_section foot_com">
          <h3 className="footer_title">Our Products</h3>
          <ul>
            <li>
              <a href="">Tablets</a>
            </li>
            <li>
              <a href="">Capsules</a>
            </li>
            <li>
              <a href="">Softgels</a>
            </li>
            <li>
              <a href="">Syrups/Suspension</a>
            </li>
            <li>
              <a href="">Injection</a>
            </li>
            <li>
              <a href="">Pediatric Range</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copy_right container_comman">
        {" "}
        Copyrights @ 2016 | All Rights Reserved.{" "}
      </div>
    </>
  );
};

export default Footer;
