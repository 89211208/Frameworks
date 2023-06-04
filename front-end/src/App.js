import { Component } from "react";
// imported routes
import HomeView from "./CustomComponents/HomeView";
import AboutView from "./CustomComponents/AboutView";
import AddNovicaView from "./CustomComponents/AddNovicaView";
import LoginView from "./CustomComponents/LoginView";
import NoviceView from "./CustomComponents/NoviceView";
import SignupView from "./CustomComponents/SignupView";
import SingleNovicaView from "./CustomComponents/SingleNovicaView";
import UserView from "./CustomComponents/UserView";

import axios from "axios";

class App extends Component {
  // constructor defined
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "none",
      novica: 0,
      userStatus:{logged:false}
    };
  }

  //custom functions
  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page,
      novica: obj.id || 0
    });
  };

  QGetView = (state) => {
    let page = state.currentPage;
    switch (page) {
      case "home":
        return <HomeView />;
      case "user":
        return state.userStatus.logged ? <UserView username={username}/> : <p>You are not logged in.</p>;
      case "about":
        return <AboutView />;
      case "novice":
        return state.userStatus.logged ? <NoviceView QIDFromChild={this.QSetView} /> : <p>Log in to see your properties.</p>;
      case "addnovica":
        return state.userStatus.logged ? <AddNovicaView QViewFromChild={this.QSetView}/> : <p>You need to be logged in to add a property.</p>;
      case "signup":
        return <SignupView />;
      case "login":
        return state.userStatus.logged ? <p>You are logged in.</p> : <LoginView QUserFromChild={this.QSetUser}/>;
      case "novica":
        return <SingleNovicaView QViewFromChild={this.QSetView} data={this.state.novica} />;
      default:
        return <HomeView />;
    }
  };

  QSetUser = (obj) => {
    console.log(obj)
    this.setState({
      userStatus:{logged:true, user:obj}
    })
  };

  componentDidMount(){
    axios.get("/users/login").then(res=>{
      console.log(res)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div id="APP" className="container">
        <div id="menu" className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a
                onClick={() => this.QSetView({ page: "home" })}
                className="navbar-brand"
                href="#"
              >
                HomeNet
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "about" })}
                      className="nav-link "
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "novice" })}
                      className="nav-link "
                      href="#"
                    >
                      My properties
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "addnovica" })}
                      className="nav-link"
                      href="#"
                    >
                      Add a property
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "signup" })}
                      className="nav-link "
                      href="#"
                    >
                      Sign up
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "login" })}
                      className="nav-link "
                      href="#"
                    >
                      Log in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "user" })}
                      className="nav-link "
                      href="#"
                    >
                      My profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="viewer" className="row container">
          {this.QGetView(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
