import React from 'react'

class App extends React.Component {
  render() {
    ///Here we should put what  we wan to display in the browser, for example
    return (
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
          {/* Home*/} 
<div className="card" style={{margin:"10px"}}>
  <div className="card-body">
    <h5 className="card-title">Welcome!!!</h5>
    <p className="card-text">You are in hte home page</p>
  </div>
</div>

{/* About*/} 
<div className="card" style={{margin:"10px"}}>
  <div className="card-body">
    <h5 className="card-title">About us</h5>
    <p className="card-text">Do you really want to know about us? </p>
  </div>
</div>

{/* News*/} 
 <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"10px"}}>
  <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Slug</p>
      </div>
      <button style={{margin:"10px"}}  className="btn btn-primary bt">Read more</button>
    </div>
  </div>
</div>

{/* Single new*/} 
<div className="card" style={{margin:"10px"}}>
  <h5 className="card-header">Featured</h5>
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <button onClick={()=>this.QSetViewInParent({page:"novice"})}  className="btn btn-primary">Return news</button>
    </div>
</div>


{/* Create new*/} 
<div className="card" style={{margin:"10px"}}>
  <h3 style={{margin:"10px"}}>Welcome user</h3>
  <div className="mb-3" style={{margin:"10px"}}>
    <label  className="form-label">Title</label>
    <input type="text" class="form-control"  placeholder="Title..."/>
  </div>
  <div className="mb-3" style={{margin:"10px"}}>
    <label  className="form-label">Slug</label>
    <input type="text" class="form-control"  placeholder="Slug..."/>
  </div>
  <div class="mb-3" style={{margin:"10px"}}>
    <label  class="form-label">Text</label>
    <textarea class="form-control" rows="3"></textarea>
  </div>
  <button  className="btn btn-primary bt" style={{margin:"10px"}}>Send</button>
</div>

{/* Signup*/} 
<div className="card" style={{width:"400px", marginLeft:"auto", marginRight:"auto", marginTop:"10px", marginBottom:"10px"}}>
  <form style={{margin:"20px"}} >
    <div className="mb-3">
      <label className="form-label">Username</label>
      <input name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
  </form>
  <button style={{margin:"10px"}}  className="btn btn-primary bt">Submit</button>
</div>
{/* Login*/} 

 <div className="card" style={{width:"400px", marginLeft:"auto", marginRight:"auto", marginTop:"10px", marginBottom:"10px"}}>
  <form style={{margin:"20px"}} >
    <div className="mb-3">
      <label className="form-label">Username</label>
      <input name="username"  type="text" className="form-control" id="exampleInputEmail1"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
  </form>
  <button  style={{margin:"10px"}} className="btn btn-primary bt">Sign up</button>
</div>

        </div>
    </div>
    )
  }
}
export default App