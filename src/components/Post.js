import React from 'react';

const Post = ({ data }) => {
  const {
    title,
    author,
    selftext,
    score
  } = data;
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{selftext}</p>
      <p>{score}</p>
    </div>
  );
}

export default Post;
