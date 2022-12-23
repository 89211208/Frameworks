import React from "react";

class SingleNovicaView extends React.Component {
  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            onClick={() => this.QSetViewInParent({ page: "novice" })}
            style={{ margin: "10px" }}
            className="btn btn-primary bt"
          >
            Return news
          </button>
        </div>
      </div>
    );
  }
}
export default SingleNovicaView;
