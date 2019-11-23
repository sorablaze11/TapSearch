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
        <Link
          style={linkStyle}
          to="https://sorablaze11.github.io/TapSearch/index"
        >
          Index
        </Link>{" "}
        |{" "}
        <Link
          style={linkStyle}
          to="https://sorablaze11.github.io/TapSearch/search"
        >
          Search
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="https://sorablaze11.github.io/TapSearch">
          All Documents
        </Link>{" "}
        |{" "}
        <Link
          style={linkStyle}
          to="https://sorablaze11.github.io/TapSearch/clear"
        >
          Clear
        </Link>
      </header>
    );
  }
}

export default NavBar;
