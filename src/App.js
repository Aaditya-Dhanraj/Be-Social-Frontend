import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Profile from "./Components/Pages/Profile";
import Home from "./Components/Pages/Home";
import CreatePost from "./Components/Pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
