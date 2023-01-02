import React from 'react';
import HomeView from "./CustomComponents/HomeView";
import AboutView from "./CustomComponents/AboutView";
import NoviceView from "./CustomComponents/NoviceView";
import AddNovicaView from "./CustomComponents/AddNovicaView";
import LoginView from "./CustomComponents/LoginView";
import SignupView from "./CustomComponents/SignupView";
import SingleNovicaView from "./CustomComponents/SingleNovicaView";
class App extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        CurrentPage:"home",
        Novica:1,
      }

  }
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
        return <SignupView />; // You did everything as it should be, for now I will this property as we won't use it anymore.
      case "login":
        return <LoginView QUserFromChild={this.QSetUser}/>;
      case "novica":
        return <SingleNovicaView data={state.Novica}  QIDFromChild={this.QSetView}/>;
    }
  };
  componentDidMount(){
    axios.get('/users/login')
        .then(response=>{
          console.log(response)
          this.setState({userStatus:response.data})

        })
  }

  QSetUser=(obj)=>{
    this.setState({
      userStatus:{logged:true,user:[obj]}
    })
  }

  QSetView = (obj) => {
    this.setState({
      CurrentPage: obj.page,
      Novica:obj.id || 0
    });
  };
  componentDidMount(){
    axios.get('/users/login')
        .then(response=>{
          console.log(response)
        })
  }

  render() {
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
                      className="navbar-brand"
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "novice" })}
                      className="navbar-brand"
                      href="#"
                    >
                      News
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "addnew" })}
                      className="navbar-brand"
                      href="#"
                    >
                      Add news
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "signup" })}
                      className="navbar-brand"
                      href="#"
                    >
                      Sign up
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "login" })}
                      className="navbar-brand"
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
          {this.QGetView(this.state)}
        </div>
      </div>
    );
  }
}
export default App;
