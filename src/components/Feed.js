import React from "react";
import { Link } from "react-router-dom";

export default function Feed() {
  const feed = [
    {
      id: 1,
      author: "Nedu Omega",
      headline: "Top 10 devs to follow on LinkedIn",
      like: 3,
    },
    {
      id: 2,
      author: "Muria Lopez",
      headline: "5 ways to waste your every day",
      like: 35,
    },
    {
      id: 3,
      author: "Company Page",
      headline: "Top 10 devs to follow on LinkedIn",
      like: 634,
    },
    {
      id: 4,
      author: "React Group",
      headline: "Hooked: Everything React Hooks",
      like: 31,
    },
    {
      id: 5,
      author: "Tolla Mirror",
      headline: "May the 4th be with you",
      like: 3,
    },
    {
      id: 6,
      author: "Hydrogen Man",
      headline: "Nich, Nich, Template",
      like: 0,
    },
  ];

  const posts = feed.map((post, i) => (
    <Link
      to={"/Feed/" + post.id}
      state={{ post }}
      key={post.id}
      className="post d-flex flex-column m-1 py-1 px-2 rounded"
    >
      <span className="d-flex flex-column">
        <span className="author">{post.author}</span>
        <span className="time">1 hour ago</span>
      </span>
      <span className="headline">{post.headline}</span>
    </Link>
  ));

  return (
    <div className="w-100">
      <span className="px-1">Feed</span>
      {posts}
    </div>
  );
}
