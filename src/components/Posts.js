import React from "react";

export default function Posts() {
  const posts = [
    { author: "Nedu Omega", headline: "Top 10 devs to follow on LinkedIn" },
    { author: "Muria Lopez", headline: "5 ways to waste your every day" },
    { author: "Company Page", headline: "Top 10 devs to follow on LinkedIn" },
  ];

  const postsList = posts.map((post) => {
    <div className="post">
      <span className="author">{post.author}</span>
      <span className="headline">{post.headline}</span>
    </div>;
  });

  return <div>{postsList}</div>;
}
