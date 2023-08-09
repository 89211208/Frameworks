import { Component } from "react";

class AboutView extends Component {
  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">About us</h5>
          <p className="card-text">Welcome to HomeNet, where we are dedicated to optimizing your property ownership experience. With a focus on personalized service and cutting-edge technology, we offer a comprehensive range of property management services tailored to your unique needs. Our expert team handles everything from marketing and tenant screening to maintenance and financial management, ensuring that your property is well-maintained, tenants are satisfied, and your investment thrives. Discover the ease and peace of mind that comes with partnering with HomeNet – your trusted partner in property success.</p>
        </div>
      </div>
    );
  }
}

export default AboutView;
