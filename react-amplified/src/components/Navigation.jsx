import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark" id= "navbar">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Comet Tax
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/formengine" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/formengine">
                  Form Engine
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/resources" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);