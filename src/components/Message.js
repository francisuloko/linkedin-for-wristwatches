import React from "react";
import { useLocation } from "react-router-dom";

export default function Message() {
  const { state } = useLocation();

  return (
    <div className="message rounded p-3 mx-2 rounded d-flex flex-column gap-2 fs-6">
      <span className="d-flex flex-column">
        <span>{state.message.author}</span>
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        praesentium ratione, quae unde corrupti, atque, aperiam ullam culpa
        dolore ea laudantium! Similique harum quia necessitatibus saepe culpa,
        ab incidunt amet?
      </span>
    </div>
  );
}
