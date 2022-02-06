import "./quickquery.css";

const QuickQuery = () => {
  return (
    <div className="webcome_container">
      <form>
        <div className="form-group row mb-3">
          <div className="col-md-4 form_label">
            <label htmlFor="name">Name</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <div className="col-md-4 form_label">
            <label htmlFor="email">Email address</label>
          </div>
          <div className="col-md-8">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <div className="col-md-4 form_label">
            <label htmlFor="contact">Contact No</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter Contact No"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <div className="col-md-4 form_label">
            <label htmlFor="location">Location/Area</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter Location/Area"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <div className="col-md-4 form_label">
            <label htmlFor="message">Message</label>
          </div>
          <div className="col-md-8">
            <textarea
              class="form-control"
              id="message"
              rows="3"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
        </div>

        <div className="btn_holder">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickQuery;
