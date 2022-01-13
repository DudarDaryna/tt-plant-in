import React from 'react';
import { Post } from '../Post/Post';
import { postsFromServer } from '../../api/posts';

import './NewPost.scss';

export const NewPost = () => {
  const post = postsFromServer.find(post => post.id === 1);

  return (
    <section className="NewPost">
      <div className="container">
        <div className="NewPost__content">
          <div className="NewPost__flag">
            New
          </div>
          <Post
            title={post.title}
            photoId={post.photoId}
            minRead={post.minRead}
            date={post.date}
            text={post.text}
            onDesktop={true}
          />
        </div>
      </div>
  </section>
  );
}
