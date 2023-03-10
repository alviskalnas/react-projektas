import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts/')
      .then(res => res.json())
      .then(postsData => {
        setPosts(postsData)
      })
  }, [])

  const newPostHandler = () => {
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const deletePostHandler = () => {
    fetch('http://localhost:3000/posts/5', {
      method: 'DELETE',
    })
  }

  const updatePostHandler = () => {
    fetch('http://localhost:3000/posts/6', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <button onClick={newPostHandler}>New post</button>
      <button onClick={deletePostHandler}>Delete 1st post</button>
      <button onClick={updatePostHandler}>Update 6th post</button>
      {posts && posts.length > 0 && posts.map((post, index) => {
        return (
          <div key={index}>
            <Link to={'/api/posts/' + post.id}>
              {post.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default NewApi;
