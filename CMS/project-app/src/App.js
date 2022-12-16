import React from 'react'
import NoviceView from './CustomComponents/NoviceView'
import HomeView from './CustomComponents/HomeView'


class App extends React.Component {

  constructor(props) {
   super(props);
   //state is where our "global" variable will be store
   this.state={
    CurrentPage: "home"
   }
  } 


  QGetView=(state)=>{
   let page = state.CurrentPage

    switch(page) {  
      case "home":
        return <HomeView/> 
      case "about":
        return <AboutView/>
      case "novice": 
        return <NoviceView QIDFromChild={this.QSetView}/>
      case "addnew":
        return <AddNovicaView/>
      case "signup":
        return <SignupView/>
      case "login":
        return <LoginView/>
      case "novica":
        return <SingleNovicaView/>
    }
  }

  
  QSetView=(obj)=>{
    this.setState({
      CurrentPage:obj.page
    })
  }



  render() {
    ///Here we should put what  we wan to display in the browser, for example
    return (
      <div id="APP" className="container">
        <div id="menu" className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <a  onClick={()=>this.QSetView({page:"home"})} className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a  onClick={()=>this.QSetView({page:"about"})} className="nav-link" href="#">About</a>
                    </li>

                    <li className="nav-item">
                      <a onClick={()=>this.QSetView({page:"news"})} className="nav-link "  href="#">News</a>
                    </li>
                      
                    <li className="nav-item">
                      <a onClick={()=>this.QSetView({page:"add news"})} className="nav-link">Add news</a>
                    </li>

                    <li className="nav-item"> 
                      <a onClick={()=>this.QSetView({page:"sign up"})} className="nav-link " href="#">Sign up</a>
                    </li>

                    <li className="nav-item" >
                      <a onClick={()=>this.QSetView({page:"login"})} className="nav-link "  href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
        <div id="viewer" className="row container">
          <div className="row container">
            {this.QGetView(this.state)}
          </div>
        </div>
    </div>
    )
  }
}
export default App
