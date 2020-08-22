import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div
      className="card input-filled"
      style={{
        margin: "26px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontFamily: "Grand Hotel,cursive" }}>Create Memories</h2>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <div className="file-field input-field">
        <div className="btn #5c6bc0 indigo lighten">
          <span>Upload Photo</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn #5c6bc0 indigo lighten"
        type="submit"
        name="action"
      >
        Submit
      </button>
    </div>
  );
};
export default CreatePost;
