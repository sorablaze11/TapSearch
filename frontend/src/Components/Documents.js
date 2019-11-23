import React, { Component } from "react";
import Axios from "axios";

export class Documents extends Component {
  state = {
    id: this.props.params.id,
    text: ""
  };

  componentWillMount() {
    Axios.get();
  }

  render() {
    return <div></div>;
  }
}

export default Documents;
