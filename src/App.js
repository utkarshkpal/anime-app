import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import img from "./naruto.jpg";
import "./css/index.css";
import SearchBar from "components/SearchBar";
import CardList from "components/CardList";
import ApiProviders from "services/ApiProviders";
import { fetchItems, loadMoreItems } from "actions/actions";

const apiProviders = new ApiProviders();

function App() {
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  const query = useSelector((state) => state.app.query);
  const currPage = useSelector((state) => state.app.currPage);
  const lastPage = useSelector((state) => state.app.lastPage);

  useEffect(() => {
    dispatch(fetchItems(query, currPage));
  }, [dispatch]);

  const LoadMoreVisible = () => {
    if (currPage < lastPage) return true;
    return false;
  };

  const handleSearch = (query) => {
    console.log("handleSearch -> query", query);

    dispatch(fetchItems(query));
  };

  const handleLoadMore = () => {
    dispatch(loadMoreItems(currPage + 1));
  };

  return (
    <div className="app">
      <header>
        <SearchBar defaultValue={query} onSearch={handleSearch} />
      </header>
      <CardList />
      {LoadMoreVisible() && (
        <div className="btn-wrapper">
          <button className="load-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
