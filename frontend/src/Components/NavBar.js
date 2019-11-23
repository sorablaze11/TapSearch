import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const headerStyle = {
      background: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "10px"
    };

    const linkStyle = {
      color: "#fff",
      textDecoration: "none"
    };
    return (
      <header style={headerStyle}>
        <h1>TapSearch</h1>
        <Link style={linkStyle} to="/index">
          Index
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/search">
          Search
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/getall">
          All Documents
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/clear">
          Clear
        </Link>
      </header>
    );
  }
}

export default NavBar;
