import React from "react"
import axios from "axios"

class SingleNovicaView extends React.Component{

	constructor(props) {
    super(props);
    this.state = {
      novica: {},
    };
  }
  componentDidMount() {
    axios.get("/novice/" + this.props.data).then((response) => {
      console.log(response.data);
      this.setState({
        novica: response.data,
      });
    });
  }

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };




    render(){
        return(
            <div className="card" style={{margin:"10px"}}>
                    <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
		    <button onClick={()=>this.QSetViewInParent({page:"novica"})} style={{margin:"10px"}}  className="btn btn-primary">Read more</button>
                </div>
            </div>

        )
    }
}

export default SingleNovicaView