import React, { Component } from "react";
import "./Navbar.css";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      
        <nav>
          <div className="nav-wrapper white">
            <Link to="/" className="brand-logo logo a">
              Be-Social
            </Link>
            <ul id="nav-mobile" className="right ullu">
              <li>
                <Link className="a" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="a" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="a" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="a" to="/create">
                  Post
                </Link>
              </li>
            </ul>
            <nav className="mobile right">
              <Link
                to="#"
                data-target="slide-out"
                className="sidenav-trigger show-on-large triple"
              >
                <i className="material-icons">menu</i>
              </Link>
            </nav>
            <ul id="slide-out" className="sidenav">
              <li>
                <Link
                  style={{
                    fontFamily: "Grand Hotel",
                    fontSize: "large",
                    marginTop: "5px",
                  }}
                  to="/"
                >
                  Be-Social
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/create">Post</Link>
              </li>
            </ul>
          </div>
        </nav>
      
    );
  }
}

export default Navbar;
