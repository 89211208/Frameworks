import React from "react";
import axios from 'axios'

class SingleNovicaView extends React.Component {
  constructor(props)
  {
      super(props);
      this.state={
          novica:{}
      }
  }


componentDidMount()
{
axios.get("/novice/"+this.props.data)
.then(response =>{
    console.log(response.data)
    this.setState({
        novica:response.data
    })
})
}


QSetViewInParent = (obj) => {
  this.props.QIDFromChild(obj);
};

  render() {
    let novica= this.state.novica
    return (
      <div className="card" style={{margin:"10px"}}>
       {novica.length>0 ?
        <div>
            <h5 className="card-header">{novica[0].title}</h5>
            <div className="card-body">
            <h5 className="card-title">{novica[0].slug}</h5>
            <p className="card-text">{novica[0].text}</p>
            <button onClick={()=>this.QSetViewInParent({page:"novice"})}  className="btn btn-primary">Return news</button>
            </div>
        </div>
       :"Loading..."}
    </div>
    );
  }
}
export default SingleNovicaView;
