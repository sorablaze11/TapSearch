import React, { Component } from "react";
import axios from "axios";

export class Index extends Component {
  state = {
    docs: ""
  };

  onIndex = e => {
    e.preventDefault();
    var payload = { data: this.state.docs };
    axios
      .post("https://tapsearchbackend.herokuapp.com/api/index", payload)
      .then(res => {
        if (res.data["status"] === 1) {
          alert("Sucessfully indexed.");
          this.setState({ docs: "" });
        } else alert("Error. Index it again.");
      });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onIndex} style={{ display: "flex" }}>
          <textarea
            type="text"
            name="docs"
            style={{ flex: "10", padding: "5px", height: "610px" }}
            placeholder="Index the documents."
            value={this.state.docs}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="IndexIt"
            className="btn"
            style={{ flex: "1", height: "20px" }}
          />
        </form>
      </div>
    );
  }
}

export default Index;
