import QuickQuery from "../quickQuery/Quickquery";
const Contactus = () => {
  return (
    <div className="container_comman welcome_container">
      <h3 className="heading_section h_margin">Connect With Us</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="con_no">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>150a/4 Chak Meera Patti Allahabad</p>
          </div>
          <div className="con_no">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <p>150a/4 Chak Meera Patti Allahabad</p>
          </div>
        </div>
        <div className="col-md-8">
          <QuickQuery />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
