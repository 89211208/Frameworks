import { Component } from "react";
import axios from "axios";

class NoviceView extends Component {
  constructor(props){
    super(props)
    this.state={
      novice:[]
    }
  }

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  componentDidMount(){
    axios.get("/novice").then(res=>{
      this.setState({
        novice:res.data
      })
    })
  }

  render() {
    let data = this.state.novice
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "10px" }}>
        {data.length > 0 ? 
         data.map(d =>{
          return(
            <div className="col" key={d.id_organizacije}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Katastrska številka: {d.katastrska_st}</h5>
                  <p className="card-text">Leto izgradnje: {d.leto_izgradnje}</p>
                </div>
                <button
                  onClick={() => this.QSetViewInParent({ page: "novica", id: d.id_stavbe })}
                  style={{ margin: "10px" }}
                  className="btn btn-primary bt"
                >
                  Read more
                </button>
              </div>
            </div>
          )
         })
        :
        "Loading"}
        
      </div>
    );
  }
}

export default NoviceView;
