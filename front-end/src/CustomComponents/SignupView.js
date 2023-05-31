import { Component } from "react";
import axios from "axios";

class SignupView extends Component {
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

  QPostSignUp = () => {
    let user = this.state.user
    axios.post("/users/register/",{
      username: user.username,
      email: user.email,
      password: user.password
    }).then(res=>{
      console.log("Sent to server...")
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div
        className="card"
        style={{
          maxWidth: "400px",
          width: "100%",
          margin: "10px auto",
          paddingLeft: "16px",
          paddingRight: "16px"
        }}
      >
      <h1 className="card-title" style={{ textAlign: "center", color:"white", margin:"8px 0 0 0" }}>
              Sign up
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
              aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
              onChange={(e) => this.QGetTextFromField(e)}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
          onClick={() => this.QPostSignUp(this.state)}
          style={{ margin: "0 auto", marginBottom:"16px"}}
          className="btn btn-primary bt"
        >
          Submit
        </button>
      </div>
    </div>
    );
  }
}

export default SignupView;
