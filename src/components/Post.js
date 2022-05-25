import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Post() {
  const { state } = useLocation();
  const [like, setLike] = useState(state.post.like);

  return (
    <div className="post rounded p-3 mx-2 rounded d-flex flex-column gap-2 fs-6">
      <span className="d-flex flex-column">
        <span>{state.post.author}</span>
      </span>
      <span>{state.post.headline}</span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        praesentium ratione, quae unde corrupti, atque, aperiam ullam culpa
        dolore ea laudantium! Similique harum quia necessitatibus saepe culpa,
        ab incidunt amet?
      </span>
      <span className="d-flex justify-content-between align-items-center">
        <span>{like} likes</span>
        <i onClick={() => setLike(like + 1)} className="bi bi-hand-thumbs-up fs-4"></i>
      </span>
    </div>
  );
}
