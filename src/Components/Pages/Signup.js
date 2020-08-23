import React, { useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Login.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const sendData = () => {
    fetch("/api/v1/users/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirm,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          M.toast({ html: "Signed-Up successfully}" });
        }
      });
  };

  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2 className="lo">Be-Social</h2>
        <input
          type="text"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="password Confirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button
          className="btn #5c6bc0 indigo lighten"
          type="submit"
          name="action"
          onClick={() => sendData()}
        >
          Sign up
        </button>
        <h6 className="underline">
          <Link to="/login">Already have an account ?</Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
