import React from "react";
import { Link } from "react-router-dom";

export default function Inbox() {
  const Inbox = [
    {
      id: 1,
      author: "Nedu Omega",
      headline: "Top 10 devs to follow on LinkedIn",
    },
    {
      id: 2,
      author: "Muria Lopez",
      headline: "5 ways to waste your every day",
    },
    {
      id: 3,
      author: "Company Page",
      headline: "Top 10 devs to follow on LinkedIn",
    },
    {
      id: 4,
      author: "React Group",
      headline: "Hooked: Everything React Hooks",
    },
    { id: 5, author: "Tolla Mirror", headline: "May the 4th be with you" },
    { id: 6, author: "Hydrogen Man", headline: "Nich, Nich, Template" },
  ];

  const messages = Inbox.map((message, i) => (
    <Link
      to={"/Inbox/" + message.id}
      state={{ message }}
      key={message.id}
      className="message d-flex flex-column m-1 py-1 px-2 rounded"
    >
      <span className="d-flex flex-column">
        <span className="author">{message.author}</span>
        <span className="time">1 hour ago</span>
      </span>
      <span className="headline">Recusandae praesentium ratione, quae unde</span>
    </Link>
  ));

  return (
    <div className="w-100">
      <span className="px-1">Inbox</span>
      {messages}
    </div>
  );
}
