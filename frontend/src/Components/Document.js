import React, { Component } from "react";
import Axios from "axios";

export class Document extends Component {
  state = {
    id: this.props.match.params.id,
    text: ""
  };

  componentWillMount() {
    Axios.get("http://127.0.0.1:8000/api/document/" + this.state.id).then(
      res => {
        if (res.data["text"].length === 0) {
          alert("No such document!");
        } else {
          this.setState({ text: res.data["text"] });
        }
        console.log(res);
      }
    );
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default Document;
