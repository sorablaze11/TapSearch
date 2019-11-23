import React, { Component } from "react";
import axios from "axios";

export class Clear extends Component {
  componentWillMount() {
    axios.get("http://127.0.0.1:8000/api/clear");
  }
  render() {
    return <div>All the indexes and documents are cleared.</div>;
  }
}

export default Clear;
