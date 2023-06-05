import axios from "axios";
import { Component } from "react";

class SingleNovicaView extends Component {

  constructor(props){
    super(props)
    this.state={
      novica:[]
    }
  }


  QSetViewInParent = (obj) => {
    this.props.QViewFromChild(obj);
  };

  componentDidMount(){
    axios.get("/novice/"+this.props.data).then(res=>{
      this.setState({
        novica:res.data
      })
    })
  }

  render() {
    console.log(this.state.novica)
    let novica = this.state.novica
    return (
      <div className="card" style={{ margin: "10px" }}>
        {novica.length > 0 ?
        <div>
          <div className="card-body">
            <h5 className="card-title">Katastrska številka: {novica[0].katastrska_st}</h5>
            <hr/>
            <p className="card-text">Leto izgradnje: {novica[0].leto_izgradnje}</p>
            <p className="card-text">Število nadstropij: {novica[0].st_nadstropij}</p>
            <p className="card-text">Število vhodov: {novica[0].st_vhodov}</p>
            <button onClick={()=>this.QSetViewInParent({page:"novice"})}  className="btn btn-primary">Return news</button>
          </div>
        </div>
        : "Loading..."}
      </div>
    );
  }
}

export default SingleNovicaView;
