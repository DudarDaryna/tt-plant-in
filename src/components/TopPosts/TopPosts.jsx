import React from 'react';
import { Post } from '../Post/Post';
import { postsFromServer } from '../../api/posts';

import './TopPosts.scss';

export const TopPosts = () => {
  const firstPost = postsFromServer.find(post => post.id === 2);
  const secondPost = postsFromServer.find(post => post.id === 3);

  return (
    <section className="TopPosts">
      <div className="container">
        <div className="TopPosts__content">
          <div className="TopPosts__mark">
            Top of the day
          </div>
          <div className="TopPosts__posts">
            <Post
              title={firstPost.title}
              photoId={firstPost.photoId}
              minRead={firstPost.minRead}
              date={firstPost.date}
              text={firstPost.text}
            />
            <Post
              title={secondPost.title}
              photoId={secondPost.photoId}
              minRead={secondPost.minRead}
              date={secondPost.date}
              text={secondPost.text}
            />
          </div>
        </div>
      </div>
  </section>
  );
}
