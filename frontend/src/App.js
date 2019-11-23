import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import Index from "./Components/Index";
import AllDocuments from "./Components/AllDocuments";
import Document from "./Components/Document";
import Clear from "./Components/Clear";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route
          exact
          path="https://sorablaze11.github.io/TapSearch/search"
          component={Search}
        />
        <Route
          exact
          path="https://sorablaze11.github.io/TapSearch/index"
          component={Index}
        />
        <Route
          path="https://sorablaze11.github.io/TapSearch/"
          component={AllDocuments}
        />
        <Route
          exact
          path="https://sorablaze11.github.io/TapSearch/document/:id"
          component={Document}
        />
        <Route
          exact
          path="https://sorablaze11.github.io/TapSearch/clear"
          component={Clear}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
