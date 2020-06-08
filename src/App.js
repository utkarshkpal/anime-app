import React, { useState, useEffect } from "react";
import img from "./naruto.jpg";
import "./css/index.css";
import SearchBar from "components/SearchBar";
import CardList from "components/CardList";
import { getListItems } from "ApiProviders";

function App() {
  const [items, setItems] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchItems("naruto", currPage);
  }, []);

  useEffect(() => {
    fetchItems(query, currPage);
  }, [currPage]);

  const fetchItems = async (query, page = currPage) => {
    const { data } = await getListItems(query, page);
    setItems([...items, ...data.results]);
  };

  const handleLoadMore = () => {
    setCurrPage(currPage + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <SearchBar value={query} onSearch={fetchItems} onUpdate={setQuery} />
        <CardList items={items} />
        <button onClick={handleLoadMore}> load more</button>
      </div>
    </div>
  );
}

export default App;
