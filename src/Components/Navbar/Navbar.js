import React, { Component, useContext } from "react";
import "./Navbar.css";
import { UserContext } from "../../App";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";
import SlideBar from "./SlideBar";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const sendLogout = () => {
    fetch("/api/v1/users/logout", {
      method: "get",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.status === "success") {
          M.toast({
            html: "Logged-Out successfully}",
            classes: "#43a047 green darken-1",
          });
          localStorage.clear();
          dispatch({ type: "CLEAR" });
          history.push("/login")
        }
      });
  };

  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link className="a" to="/profile">
            Profile
          </Link>
        </li>,
        <li>
          <Link className="a" to="/create">
            Post
          </Link>
        </li>,
        <li>
          <button
            className="btn #5c6bc0 indigo lighten"
            type="submit"
            name="action"
            onClick={() => sendLogout()}
          >
            logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link className="a" to="/login">
            Login
          </Link>
        </li>,
        <li>
          <Link className="a" to="/signup">
            Signup
          </Link>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signup"} className="brand-logo logo a">
          Be-Social
        </Link>
        ,
        <ul id="nav-mobile" className="right ullu">
          {renderList()}
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
        <SlideBar />
      </div>
    </nav>
  );
};

export default Navbar;
