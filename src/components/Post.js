import React from "react";
import { useLocation } from "react-router-dom";

export default function Post() {
  const { state } = useLocation();

  return (
    <div className="post rounded p-3 mx-2 rounded d-flex flex-column gap-2 fs-6">
      <span>{state.post.author}</span>
      <span>{state.post.headline}</span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        praesentium ratione, quae unde corrupti, atque, aperiam ullam culpa
        dolore ea laudantium! Similique harum quia necessitatibus saepe culpa,
        ab incidunt amet?
      </span>
     <span className="d-flex justify-content-between align-items-center">
      <span>5 likes</span>
       <i className="bi bi-hand-thumbs-up fs-4"></i>
     </span>
    </div>
  );
}