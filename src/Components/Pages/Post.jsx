import React from "react";
import { useSelector } from "react-redux";

export const Post = () => {
  const post = useSelector((state) => state.post);
  console.log("Hiii", post);
  return (
    <div>
      <h2>Post</h2>
      {post.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  );
};
