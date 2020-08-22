import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
//   var instance = M.Dropdown.getInstance(elem);
//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
//   });
  
  
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo logo">
          Be-Social
        </Link>
        <ul id="nav-mobile" className="right">
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
        {/* <Link class="dropdown-trigger btn right" to='#' data-target="dropdown1">
          III
        </Link>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
