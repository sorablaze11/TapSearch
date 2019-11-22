import React, { Component } from "react";
import axios from "axios";

export class Search extends Component {
  state = {
    word: "",
    references: ["s"]
  };

  onSearch = e => {
    e.preventDefault();
    // this.props.addTodo(this.state.title);
    this.setState({ word: "" });
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
            <p>{reference}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
