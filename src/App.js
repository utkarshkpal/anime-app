import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/index.css";
import SearchBar from "components/SearchBar";
import CardList from "components/CardList";
import { fetchNewItems, loadMoreItems } from "actions/actions";

function App() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const currPage = useSelector((state) => state.search.currPage);
  const lastPage = useSelector((state) => state.search.lastPage);

  useEffect(() => {
    dispatch(fetchNewItems(query, currPage));
  }, []);

  const LoadMoreVisible = () => currPage < lastPage;

  const handleSearch = (query) => {
    dispatch(fetchNewItems(query));
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
