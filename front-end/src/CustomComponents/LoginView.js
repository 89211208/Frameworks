import axios from "axios";
import { Component } from "react";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        type: "login"
      }
    };
  }

  QGetTextFromField = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, [e.target.name]: e.target.value }
    }));
  };

  QSendUser2Parent = (obj) => {
    this.props.QUserFromChild(obj);
  };

  QPostLogin = () => {
    let user = this.state.user
    axios.post("/users/login",{
      username: user.username,
      password: user.password
    },{withCredentials:true})
    .then(res=>{
      console.log("Sent to the server...")
      console.log(res.data)
      this.QSendUser2Parent(res.data)
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <div
          className="card"
          style={{
            maxWidth: "400px",
            width: "100%",
            margin: "10px auto"
          }}
        >
          <div className="card-body">
            <h1 className="card-title" style={{ textAlign: "center", margin:"-8px 0 0 0" }}>
              Log in
            </h1>
            <hr style={{ borderTop: "1px solid #ccc", margin: "10px 0" }} />
            <form style={{ margin: "0px" }}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  onChange={(e) => this.QGetTextFromField(e)}
                  name="username"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={(e) => this.QGetTextFromField(e)}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </form>
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => this.QPostLogin()}
                style={{ margin: "0 auto" }}
                className="btn btn-primary bt"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
