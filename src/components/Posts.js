import React from "react";

export default function Posts() {
  const posts = [
    { author: "Francis Uloko", headline: "Top 10 devs to follow on LinkedIn" },
    { author: "Francis Uloko", headline: "Top 10 devs to follow on LinkedIn" },
    { author: "Francis Uloko", headline: "Top 10 devs to follow on LinkedIn" },
  ];
  const postsList = posts.map((post) => {
    <div className="post">
      <p>{post.author}</p>
      <span> {post.headline}</span>
    </div>;
  });

  return <div>{postsList}</div>;
}
