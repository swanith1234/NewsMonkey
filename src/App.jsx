import React, { Component } from "react";
import Navbar from "./Navbar";
import Newscomponent from "./Newscomponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router basename="/NewsMonkey/">
        <div>
          <Navbar />
          <div className="text-center">
            <img src="/title.gif" alt="" height="60px" className="m-2 mt-5" />
            <h3>Top Headlines</h3>
          </div>
          <Routes>
            <Route
              path="/"
              element={<Newscomponent key={"general"} category="general" />}
            />
            <Route
              path="/entertainment"
              element={
                <Newscomponent key="entertainment" category="entertainment" />
              }
            />
            <Route
              path="/sports"
              element={<Newscomponent key="sports" category="sports" />}
            />
            <Route
              path="/business"
              element={<Newscomponent key="business" category="business" />}
            />
            <Route
              path="/politics"
              element={<Newscomponent key="politics" category="politics" />}
            />
            <Route
              path="/education"
              element={<Newscomponent key="education" category="science" />}
            />
            <Route
              path="/health"
              element={<Newscomponent key="health" category="health" />}
            />
            <Route
              path="/technology"
              element={<Newscomponent key="technology" category="technology" />}
            />
            <Route
              path="/travel"
              element={<Newscomponent key="travel" category="travel" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
