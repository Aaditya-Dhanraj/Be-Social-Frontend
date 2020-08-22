import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Aaditya</h5>
        <div className="card-image">
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="card-content">
        <i className="material-icons heart">favorite_border</i>
          <h6 >title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Aaditya</h5>
        <div className="card-image">
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="card-content">
          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Aaditya</h5>
        <div className="card-image">
          <img
            alt="#"
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="card-content">
          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
