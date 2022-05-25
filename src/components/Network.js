import React from "react";
import { Link } from "react-router-dom";

export default function Network() {
  const network = [
    {
      id: 1,
      name: "Nedu Omega",
      message: "Wants to join your network.",
    },
    {
      id: 2,
      name: "Muria Lopez",
      message: "Invited you to subscribe to her Newsletter.",
    },
    {
      id: 3,
      name: "Elon Musk",
      message: "Accepted your connection request.",
    },
  ];

  const invitations = network.map((user) => (
    <Link
      to={"/network/"}
      state={{ user }}
      key={user.id}
      className="user d-flex flex-column m-1 py-1 px-2 rounded"
    >
      <span className="d-flex flex-column">
        <span className="name">{user.name}</span>
        <span className="message">{user.message}</span>
        <span className="time">1 hour ago</span>
      </span>
    </Link>
  ));

  return (
    <div className="w-100">
      <span className="px-1">Invitations</span>
      {invitations}
    </div>
  );
}
