import React, { Component } from "react";
import axios from "axios";
export class Search extends Component {
  state = {
    word: "",
    references: []
  };

  onSearch = e => {
    e.preventDefault();
    var payload = {
      word: this.state.word
    };
    axios.post("http://127.0.0.1:8000/api/search", payload).then(res => {
      if (res.data["docs"].length !== 0) {
        this.setState({ word: "" });
        this.setState({ references: res.data["docs"] });
      } else {
        this.setState({ word: "" });
        this.setState({ references: [] });
        alert("Error. Given word is not present in any document.");
      }
      console.log(this.state.references);
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch} style={{ display: "flex" }}>
          <input
            type="text"
            name="word"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Search the documents..."
            value={this.state.word}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
        {this.state.references.map(reference => (
          <div style={this.getStyle()}>
            <p>
              No of Occurences: {reference[0]}
              <br />
              DocumentID: {reference[1]}
              <br />
              Document Text:{reference[2]}
              {/* <form action={"/document/" + reference[1]}>
                <input type="submit" value="See the Document" />
              </form> */}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
