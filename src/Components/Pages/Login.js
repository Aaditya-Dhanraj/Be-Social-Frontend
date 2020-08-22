import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2 className="lo">Be-Social</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Password" />
        <button
          className="btn #5c6bc0 indigo lighten"
          type="submit"
          name="action"
        >
          Login
        </button>
        <h6 className="underline">
          <Link to='/signup' >Don't have an account ?</Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
