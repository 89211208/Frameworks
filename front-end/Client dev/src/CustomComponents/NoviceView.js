import React from "react";

class NoviceView extends React.Component {
  constructor(props)
{
    super(props);
    this.state={
        Novice:[]
    }
}

componentDidMount()
{
  axios.get('http://88.200.63.148:5015/novice')
  .then(response=>{
      console.log(response.data)
    this.setState({
      Novice:response.data
    })
  })
}


  render() {
    let data=this.state.Novice
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"10px"}}>
    {data.length > 0 ?
        data.map((d)=>{
            return(
                <div className="col" key={d.id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{d.title}</h5>
                        <p className="card-text">{d.slug}</p>
                    </div>
                    <button style={{margin:"10px"}}  className="btn btn-primary bt">Read more</button>
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
