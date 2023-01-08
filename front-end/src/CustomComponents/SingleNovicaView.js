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
    axios.get("http://localhost:5000/novice/"+this.props.data).then(res=>{
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
          <h5 className="card-header">{novica[0].title}</h5>
          <div className="card-body">
          <h5 className="card-title">{novica[0].slug}</h5>
          <p className="card-text">{novica[0].text}</p>
          <button onClick={()=>this.QSetViewInParent({page:"novice"})}  className="btn btn-primary">Return news</button>
          </div>
        </div>
        : "Loading..."}
      </div>
    );
  }
}

export default SingleNovicaView;
