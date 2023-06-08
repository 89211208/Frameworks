import { Component } from "react";
import axios from "axios";

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stavbeCount: ""
    };
  }

  componentDidMount() {
    axios
      .get("/novice")
      .then((res) => {
        const stavbeCount = res.data.length;
        this.setState({ stavbeCount });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { user } = this.props;
    const { stavbeCount } = this.state;

    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Welcome {user && user.username}!</h5>
          <hr></hr>
          <p className="card-text">Username: {user && user.username}</p>
          <p className="card-text">Email: {user && user.email}</p>
          <p className="card-text">Total properties: {stavbeCount}</p>
        </div>
      </div>
    );
  }  
}

export default UserView;