import React from "react";

import HomeView from "./CustomComponents/HomeView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  QSetView = (obj) => {
    let page = obj.page;
    switch (page) {
      case "about":
        console.log("fabout");
        break;
      case "novice":
        console.log("fnovice");
        break;
      case "addnew":
        console.log("faddnew");
        break;
      case "signup":
        console.log("fsignup");
        break;
      case "login":
        console.log("flogin");
        break;
      default:
        console.log("fhome");
        break;
    }
  };

  render() {
    return (
      <div id="APP" className="container">
        <div id="menu" className="row">
          <div id="viewer" className="row container"></div>
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
      </div>
    );
  }
}

export default App;
