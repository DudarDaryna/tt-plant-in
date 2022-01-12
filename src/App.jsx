import { useState } from "react";
import { Search } from './components/Search/Search';
import { Header } from './components/Header/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const changeSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header />
      <Search
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
      />
    </>
  );
}

export default App;
