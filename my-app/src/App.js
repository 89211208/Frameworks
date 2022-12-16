import React from 'react'

import NoviceView from './CustomComponents/NoviceView'
import HomeView from './CustomComponents/HomeView'
import AboutView from './CustomComponents/AboutView'
import AddNovicaView from './CustomComponents/AddNovicaView'
import LoginView from './CustomComponents/LoginView'
import SignupView from './CustomComponents/SignupView'
import SingleNovicaView from './CustomComponents/SingleNovicaView'

class App extends React.Component
{
    render()
    {
      return(

        <div id="APP" className="container">
       
               <div id="menu" className="row">
                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                     <div className="container-fluid">
                       <a className="navbar-brand" href="#">Home</a>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                       </button>
       
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                             <a className="nav-link " href="#">About</a>
                           </li>
       
                           <li className="nav-item">
                             <a className="nav-link "  href="#">News</a>
                           </li>
                             
                           <li className="nav-item">
                             <a className="nav-link">Add news</a>
                           </li>
       
                           <li className="nav-item"> 
                             <a className="nav-link " href="#">Sign up</a>
                           </li>
       
                           <li className="nav-item" >
                             <a className="nav-link "  href="#">Login</a>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </nav>
               </div>
       
               <div id="viewer" className="row container">
                <HomeView />
               </div>
       
           </div>
       
       )
       
    }
}
export default App;