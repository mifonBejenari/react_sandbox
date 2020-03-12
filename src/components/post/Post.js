import React, {
  // Context
} from 'react';

const Post = props => {
  const {
    title,
    body,
  } = props;

  return (
    <>
      <h3>Post:</h3>
      <h4>{title}</h4>
      <div>
        {body}
      </div>
    </>
  )
};

export default Post;