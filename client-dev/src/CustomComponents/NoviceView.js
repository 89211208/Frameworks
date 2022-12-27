import React from "react";
import axios from "axios";

class NoviceView extends React.Component {

  state = {
    Novice: []
  }

  constructor(props) {
    super(props);
    this.state = {
      Novice: [],
    };
  }

  componentDidMount() {
    console.log('componentDiDMount');

    const vm = this;

    axios.get("/novice").then((response) => {
      console.log(response, response.data);
      vm.setState({
        Novice: response.data,
      });
    });
  }

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  render() {
    let data = this.state.Novice;
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px" }}
      >
        {data.length > 0
          ? data.map((d) => {//
              return (
                <div className="col" key={d.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{d.title}</h5>
                      <p className="card-text">{d.slug}</p>
                    </div>
                    <button onClick={()=>this.QSetViewInParent({page:"novica"})} style={{margin:"10px"}}  className="btn btn-primary bt">Read more</button>

                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

export default NoviceView;
