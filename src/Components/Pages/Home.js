import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import M from "materialize-css";
import { UserContext } from "../../App";

const Home = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch("/api/v1/posts/")
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          // console.log(result.data.posts);
          setData(result.data.posts);
        } else if (!result.data) {
          M.toast({
            html: "Please check your internet connection",
            classes: "#c62828 red darken-1",
          });
        }
      });
  }, []);
  const [data, setData] = useState([]);
  const likePost = (id) => {
    fetch("/api/v1/posts/like", {
      method: "put",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // console.log(data);
        const newData = data.map((item) => {
          // console.log(result);
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unLikePost = (id) => {
    fetch("/api/v1/posts/unLike", {
      method: "put",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            // console.log(item.postedBy);
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (text, postId) => {
    fetch("/api/v1/posts/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map((item) => {
          // console.log("comments", item.comments);
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      {data.map((item) => {
        {
          {
            /* console.log("maini", item); */
          }
        }
        return (
          <div className="card home-card" key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <div className="card-image">
              <img alt="#" src={item.photo} />
            </div>
            <div className="card-content">
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons heart"
                  onClick={() => unLikePost(item._id)}
                >
                  favorite
                </i>
              ) : (
                <i
                  className="material-icons"
                  onClick={() => likePost(item._id)}
                >
                  favorite_outline
                </i>
              )}

              <h6>{item.likes.length} Likes</h6>
              {/* <i className="material-icons" style={{marginLeft:"8px"}} >chat_bubble_outline</i> */}
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {
                //data.item &&
                item.comments.map((record, key) => {
                  console.log("num", record);
                  return (
                    <h6 key={key}>
                      <span style={{ fontWeight: "500" }}>Aaditya</span>
                      yash chutiya hai
                    </h6>
                  );
                })
              }

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  makeComment(e.target[0].value, item._id);
                }}
              >
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
