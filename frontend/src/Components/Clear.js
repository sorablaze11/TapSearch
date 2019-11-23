import React, { Component } from "react";
import axios from "axios";

export class Clear extends Component {
  componentWillMount() {
    axios.get("https://tapsearchbackend.herokuapp.com/api/clear");
  }
  render() {
    return <div>All the indexes and documents are cleared.</div>;
  }
}

export default Clear;
