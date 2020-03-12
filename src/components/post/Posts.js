import React, { useEffect } from 'react';
import Post from './Post';

const Posts = props => {
  const {
    posts,
    getData,
    setPosts,
  } = props;

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/posts', setPosts);
  }, [setPosts]);

  return (
    <>
      <h2>Posts:</h2>
      <ul>
        {posts.map(post => (
          <Post key={post.id} {...post}/>
        ))}
      </ul>
    </>
  )
};

export default Posts;