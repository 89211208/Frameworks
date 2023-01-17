import { Component } from "react";

class AboutView extends Component {
  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">About us</h5>
          <p className="card-text">Welcome to RideUp, your go-to app for safe, reliable and convenient transportation. We are dedicated to making your travel experience as seamless as possible.<br/><br/>
                                  At RideUp, we understand the importance of getting from point A to point B in the most efficient and affordable way possible. That's why we have created a platform that connects riders with drivers at the touch of a button.<br/><br/>
                                  Our mission is to provide a transportation experience that is reliable, safe and convenient for everyone. We strive to make our service accessible to all, regardless of location, time or budget.<br/><br/>
                                  Our platform is designed to make the process of booking a ride as easy as possible. With our user-friendly app, you can request a ride, track your driver in real-time and rate your experience - all with just a few taps.<br/><br/>
                                  We take pride in the quality of our drivers, who are all background-checked and trained to provide the best possible service. Our vehicles are regularly maintained to ensure the highest level of safety and comfort.<br/><br/>
                                  We are constantly working to improve our service and provide new features that make your experience even better. Whether you're traveling for work or leisure, we're here to make your journey as smooth as possible.<br/><br/>
                                  At RideUp, we are committed to providing a transportation experience that is second to none. We look forward to being your go-to app for all your transportation needs.<br/><br/>
                                  Thank you for choosing RideUp.</p>
        </div>
      </div>
    );
  }
}

export default AboutView;
