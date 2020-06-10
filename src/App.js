import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/index.css";
import SearchBar from "components/SearchBar";
import CardList from "components/CardList";
import { fetchItems, loadMoreItems } from "actions/actions";

function App() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.app.query);
  const currPage = useSelector((state) => state.app.currPage);
  const lastPage = useSelector((state) => state.app.lastPage);

  useEffect(() => {
    dispatch(fetchItems(query, currPage));
  }, []);

  const LoadMoreVisible = () => currPage < lastPage;

  const handleSearch = (query) => {
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
