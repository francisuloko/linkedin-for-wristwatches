import React from "react";
import { Link } from "react-router-dom";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      message: "Nedu Omega and 2 others liked your post",
      headline: "Top 10 devs to follow on LinkedIn",
    },
    {
      id: 2,
      message: "People are reacting to Muria Lopez's post",
      headline: "5 ways to waste your every day",
    },
    {
      id: 3,
      message: "This post is popular at MicrosoFT",
      headline: "Hooked: Everything React Hooks",
    },
  ];

  const alerts = notifications.map((alert) => (
    <Link
      to={"/notification/" + alert.id}
      state={{ alert }}
      key={alert.id}
      className="user d-flex flex-column m-1 py-1 px-2 rounded"
    >
      <span className="d-flex flex-column">
        <span className="message">{alert.message}</span>
        <span className="headline">{alert.headline}</span>
        <span className="time">1 hour ago</span>
      </span>
    </Link>
  ));

  return (
    <div className="w-100">
      <span className="px-1">Notifications</span>
      {alerts}
    </div>
  );
}
