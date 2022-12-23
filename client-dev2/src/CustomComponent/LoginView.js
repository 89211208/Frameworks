import React from "react";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        type: "signup",
      },
    };
  }
  QGetTextFromField = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, [e.target.name]: e.target.value },
    }));
  };

  QSentUserToParent = () => {
    this.props.QUserFromChild(this.state.user);
  };

  QPostLogin=()=>{
    axios.post('/users/login',{
      username:this.state.user.username,
      password:this.state.user.password
    },{withCredentials:true})
    .then(response=>{
      console.log("Sent to server...")
      this.QSendUser2Parent(response.data[0])
    })
    .catch(err=>{
      console.log(err)
    });
  };


  QSendUser2Parent=(obj)=>{
    this.props.QUserFromChild(obj)
  } 


  render() {
    return (
      <div
        className="card"
        style={{
          width: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <form style={{ margin: "20px" }}>
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
        <button
          onClick={() => this.QSentUserToParent()}
          style={{ margin: "10px" }}
          className="btn btn-primary bt"
        >
          Login
        </button>
      </div>
    );
  }
}

export default LoginView;
