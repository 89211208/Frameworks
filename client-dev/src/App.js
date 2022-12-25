import React from "react";
import axios from "axios";
import AboutView from "./CustomComponents/AboutView";
import AddNovicaView from "./CustomComponents/AddNovicaView";
import HomeView from "./CustomComponents/HomeView";
import LoginView from "./CustomComponents/LoginView";
import NoviceView from "./CustomComponents/NoviceView";
import SignupView from "./CustomComponents/SignupView";
import SingleNovicaView from "./CustomComponents/SingleNovicaView";

class App extends React.Component {
  ///The constructor of our app.
  constructor(props) {
    super(props);
    //state is where our "global" variable will be store
    this.state = { CurrentPage: "home", Novica: 1 };
  }

  componentDidMount() {
    axios.get("/users/login").then((response) => {
      console.log(response);
      this.setState({ userStatus: response.data });
    });
  }

  QSetUser = (obj) => {
    this.setState({
      userStatus: { logged: true, user: [obj] },
    });
  };

  QGetView = (state) => {
    let page = state.CurrentPage;

    switch (page) {
      case "home":
        return <HomeView />;
      case "about":
        return <AboutView />;
      case "novice":
        return <NoviceView QIDFromChild={this.QSetView} />;
      case "addnew":
        return <AddNovicaView />;
      case "signup":
        return <SignupView QUserFromChild={this.QHandleUserLog} />;
      case "login":
        return <LoginView QUserFromChild={this.QSetUser} />;
      case "novica":
        return (
          <SingleNovicaView data={state.Novica} QIDFromChild={this.QSetView} />
        );
      default:
        return <HomeView />;
    }
  };

  QSetView = (obj) => {
    this.setState({
      CurrentPage: obj.page,
      Novica: obj.id || 0,
    });
  };

  render() {
    ///Here we should put what  we wan to display in the browser, for example
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
                Home
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
                      News
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "addnew" })}
                      className="nav-link"
                    >
                      Add news
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
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="viewer" className="row container">
          <div className="row container">{this.QGetView(this.state)}</div>
        </div>
      </div>
    );
  }
}

export default App;
