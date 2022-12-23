import React from "react";

class AddNovicaView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novica: {},
    };
  }
  QGetTextFromField = (e) => {
    this.setState((prevState) => ({
      novica: { ...prevState.novica, [e.target.name]: e.target.value },
    }));
  };
  QPostNovica = () => {
    axios.post("/novice", {
        title: this.state.novica.title,
        slug: this.state.novica.slug,
        text: this.state.novica.text,
      })
      .then((response) => {
        console.log("Sent to server...");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <h3 style={{ margin: "10px" }}>Welcome user</h3>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Title</label>
          <input
            name="title"
            onChange={(e) => this.QGetTextFromField(e)}
            type="text"
            className="form-control"
            placeholder="Title..."
          />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Slug</label>
          <input
            name="slug"
            onChange={(e) => this.QGetTextFromField(e)}
            type="text"
            className="form-control"
            placeholder="Slug..."
          />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Text</label>
          <textarea className="form-control" rows={3}></textarea>
        </div>
        <button
          onClick={() => this.QPostNovica()}
          className="btn btn-primary bt"
          style={{ margin: "10px" }}>Send</button>
      </div>
    );
  }
}

export default AddNovicaView;
