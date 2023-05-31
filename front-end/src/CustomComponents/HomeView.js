import { Component } from "react";

class HomeView extends Component {
  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Welcome to HomeNet!</h5>
          <p className="card-text">Effortless home management</p>
        </div>
      </div>
    );
  }
}

export default HomeView;
