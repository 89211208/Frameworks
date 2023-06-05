import { Component } from "react";

class UserView extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Welcome {user && user.username}!</h5>
          <p className="card-text">Username: {user && user.username}</p>
        </div>
      </div>
    );
  }
}

export default UserView;
