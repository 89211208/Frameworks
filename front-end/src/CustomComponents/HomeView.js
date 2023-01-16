import { Component } from "react";

class HomeView extends Component {
  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Welcome to RideUp!</h5>
          <p className="card-text">Ride with ease, wherever you please.</p>
        </div>
      </div>
    );
  }
}

export default HomeView;
