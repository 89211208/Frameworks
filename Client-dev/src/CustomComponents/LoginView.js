import React from "react";
import axios from 'axios';
class LoginView extends React.Component {
    QSendUser2Parent=(obj)=>{
        this.props.QUserFromChild(obj)
    }

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
            })
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
          marginBottom: "10px"
        }}
      >
        <form style={{ margin: "20px" }}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
        <button style={{ margin: "10px" }} className="btn btn-primary bt">
          Sign up
        </button>
      </div>
    );
  }
}
export default LoginView;
