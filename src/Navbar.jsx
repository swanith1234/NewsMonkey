import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="sticky-top ">
          <nav className="navbar navbar-expand-lg bg-primary ">
            <div className="container-fluid">
              <a href="/">
                <img
                  src="/newsmonkey.jpeg"
                  alt=""
                  height="60px"
                  className="mx-3 rounded-5"
                />
              </a>
              <a className="navbar-brand" href="/">
                <h3> NewsMonkey</h3>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/entertainment"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Entertainment</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/education"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Science</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/business"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Business</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/sports"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Sports</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/politics"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Politics</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/travel"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Tourism</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/health"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Health</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/technology"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <h6>Technology</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
