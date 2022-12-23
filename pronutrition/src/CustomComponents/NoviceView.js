import React from "react";
import axios from "axios";

class NoviceView extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
        Novice:[]
    }
  }


  componentDidMount() {
    axios.get("/novice")
    .then(res=>{
      console.log(res.data)
      this.setState({
        novice:res.data
      })
    })
  }


  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  render() {
    let data=this.state.Novice
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"10px"}}>
    {data.length > 0 ?
        data.map((Novice)=>{
            return(
                <div className="col" key={Novice.id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{Novice.title}</h5>
                        <p className="card-text">{Novice.slug}</p>
                    </div>
                    <button style={{margin:"10px"}}  className="btn btn-primary bt" onClick={()=>this.QSetViewInParent({page:"novica", id: d.id})} >Read more</button>
                </div>
                </div>
                )
            })
             :"Loading..."}
        </div>
    );
  }
}

export default NoviceView;