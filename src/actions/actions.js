import { Dispatch } from "redux";
import ApiProviders from "services/ApiProviders";

export const SET_DATA = "SET_DATA";
export const ADD_DATA = "ADD_DATA";
export const SET_CURR_PAGE = "SET_CURR_PAGE";
export const SET_QUERY = "SET_QUERY";
export const SET_LAST_PAGE = "SET_LAST_PAGE";

const apiProviders = new ApiProviders();

export const fetchItems = (query, page = 1) => async (
  dispatch,
  getState,
  apiProvider
) => {
  const { lastPage, results } = await apiProviders.searchItems(query, page);

  dispatch({
    type: SET_CURR_PAGE,
    payload: 1,
  });
  dispatch({
    type: SET_QUERY,
    payload: query,
  });
  dispatch({
    type: SET_DATA,
    payload: results,
  });
  dispatch({
    type: SET_LAST_PAGE,
    payload: lastPage,
  });
};

export const loadMoreItems = (page) => async (
  dispatch,
  getState,
  apiProvider
) => {
  const {
    app: { query },
  } = getState();
  const { results } = await apiProviders.searchItems(query, page);
  dispatch({
    type: SET_CURR_PAGE,
    payload: page,
  });
  dispatch({
    type: ADD_DATA,
    payload: results,
  });
};
