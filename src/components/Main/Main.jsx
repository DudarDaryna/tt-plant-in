import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Interesting } from "../Interesting/Interesting";
import { NewPost } from "../NewPost/NewPost";
import { Promo } from "../Promo/Promo";
import { Search } from '../Search/Search';
import { TopPosts } from "../TopPosts/TopPosts";

export const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const changeSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="Main">
      <Search
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
      />
      {!searchQuery && (
        <>
          <NewPost />
          <TopPosts />
        </>
      )}
      <Interesting searchQuery={searchQuery}/>
      <Footer />
    </div>
  );
}
