import React from "react";
import spinner from "../imgs/spinner.gif";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div>
        <img src={spinner} alt="loading..." />{" "}
      </div>
    );
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
