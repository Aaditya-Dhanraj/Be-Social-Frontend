import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { UserContext } from "../../App";

const Profile = () => {
  const { state, dispatch } = useContext(UserContext);
  const [myPics, setMyPics] = useState([]);
  useEffect(() => {
    fetch("/api/v1/posts/myPosts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.myPosts);
        setMyPics(data.data.myPosts);
      });
  }, []);

  return (
    <div className="parent">
      <div
        className="parent2"
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid black",
          gridTemplateColumns: "30% 70%",
        }}
      >
        <div>
          <img
            className="dp"
            alt="#"
            src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="left">
          <h4>{state ? state.name : "Loading"}</h4>
          <div
            className="par"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <div className="para">
              <p className="up">Posts</p>
              <p className="down">40</p>
            </div>
            <div className="para">
              <p className="up">Followers</p>
              <p className="down">40</p>
            </div>
            <div className="para">
              <p className="up">Following</p>
              <p className="down">40</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallary">
        {myPics.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              alt={item.title}
              src={item.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
