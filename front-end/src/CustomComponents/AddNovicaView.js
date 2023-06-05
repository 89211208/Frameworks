import { Component } from "react";
import axios from "axios";

class AddNovicaView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      novica:{}
    };
  }

  QGetTextFromField = (e) => {
    this.setState(prevState => ({
      novica: { ...prevState.novica, [e.target.name]: e.target.value }
    }));
  };

  QPostNovica = () => {
    axios.post("/novice",{
      id_organizacije: this.state.novica.id_organizacije,
      id_stavbe: this.state.novica.id_stavbe,
      leto_izgradnje: this.state.novica.leto_izgradnje,
      st_nadstropij: this.state.novica.st_nadstropij,
      st_vhodov: this.state.novica.st_vhodov,
      katastrska_st: this.state.novica.katastrska_st
    }).then(res=>{
      console.log("Sent to server...")
    }).catch(error=>{
      console.log(error)
    })
    this.props.QViewFromChild({page:"novice"})
  }

  render() {
    console.log(this.state.novica)
    return (
      <div className="card" style={{ maxWidth: "400px", width: "100%", margin: "10px auto", textAlign:"left" }}>
        <h3 style={{ margin: "10px", textAlign:"center", margin:"10px 0 0 0" }}>Add a property</h3>
        <hr style={{ borderTop: "1px solid #ccc", margin: "10px 0" }} />
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">ID Organizacije</label>
          <input
          name="id_organizacije"
          onChange={(e)=>this.QGetTextFromField(e)} 
          type="number" 
          className="form-control" 
          placeholder="ID organizacije..." />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Leto izgradnje</label>
          <input
          name="leto_izgradnje"
          onChange={(e)=>this.QGetTextFromField(e)} 
          type="number" 
          className="form-control" 
          placeholder="Leto izgradnje..." />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Število nadstropij</label>
          <input
          name="st_nadstropij"
          onChange={(e)=>this.QGetTextFromField(e)} 
          type="number" className="form-control" 
          placeholder="Število nadstropij..." />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Število vhodov</label>
          <input
          name="st_vhodov"
          onChange={(e)=>this.QGetTextFromField(e)} 
          type="number" className="form-control" 
          placeholder="Število vhodov..." />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Katastrska številka</label>
          <input
          name="katastrska_st"
          onChange={(e)=>this.QGetTextFromField(e)} 
          type="text" className="form-control" 
          placeholder="Katastrska Številka" />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">ID</label>
          <input
          name="id_stavbe"
          onChange={(e)=>this.QGetTextFromField(e)} 
          type="number" className="form-control" 
          placeholder="ID stavbe..." />
        </div>
        <button 
        onClick={()=>this.QPostNovica()}
        className="btn btn-primary bt" 
        style={{ margin: "10px" }}>
          Post ride
        </button>
      </div>
    );
  }
}

export default AddNovicaView;
