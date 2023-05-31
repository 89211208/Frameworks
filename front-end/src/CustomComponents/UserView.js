import { Component } from "react";

class UserView extends Component {
  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">User</h5>
          <p className="card-text">User details</p>
        </div>
      </div>
    );
  }
}

export default UserView;
