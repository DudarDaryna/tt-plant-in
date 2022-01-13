import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

import { postsFromServer } from '../../api/posts';
import { Post } from "../Post/Post";
import { Promo } from "../Promo/Promo";

import './Interesting.scss';

export const Interesting = ({ searchQuery }) => {
  const [posts, setPosts] = useState(postsFromServer);
  const [visiblePosts, setVisiblePosts] = useState(posts);
  const [pagesLoad, setPagesLoad] = useState(9);

  useEffect(() => {
    const visible = posts.filter((post) => {
      const text = post.text.toLowerCase();
      const title = post.title.toLowerCase();
      const query = searchQuery.toLowerCase();

      return text.includes(query) || title.includes(query);
    });

    setVisiblePosts(visible);
  }, [searchQuery, posts]);

  const fetchData = () => {
    const additionalPosts = postsFromServer.map((post) => ({
      ...post,
      id: post.id + pagesLoad,
    }));

    setTimeout(() => {
      setPosts([...posts, ...additionalPosts]);
    }, 1500);

    setPagesLoad(pagesLoad * 2);
  };

  return (
    <section className="Interesting">
      <div className="container">
        <div className="Interesting__content">
          <h3 className="Interesting__mark">Interesting</h3>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchData}
            hasMore={true}
            loader={visiblePosts.length > 0}
            endMessage={""}
            style={{ overflow: "visible" }}
          >
            {visiblePosts.length ? (
              <ul className="Interesting__list">
                {visiblePosts.map(
                  ({ id, photoId, title, minRead, date, text }, index) => {
                    return (
                      <>
                        <li key={id} className="Interesting__post">
                          <Post
                            minRead={minRead}
                            date={date}
                            photoId={photoId}
                            title={title}
                            text={text}
                            isHorizontal={false}
                          />
                          </li>
                        {(index + 5) % 9 === 0 && (
                          <li className="Interesting__promo">
                            <Promo />
                          </li>
                        )}
                      </>
                    );
                  }
                )}
              </ul>
            ) : (
              <p className="Interesting__error">
                Nothing was found ;(
              </p>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
};