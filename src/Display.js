import React from "react";
const Article = ({ title, snippet }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
