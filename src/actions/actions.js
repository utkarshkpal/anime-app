import ApiProviders from "services/ApiProviders";

export const FETCH_NEW_ITEMS = "FETCH_NEW_ITEMS";
export const LOAD_MORE_ITEMS = "LOAD_MORE_ITEMS";

const apiProviders = new ApiProviders();

export const fetchNewItems = (query, page = 1) => async (dispatch) => {
  const { lastPage, results } = await apiProviders.searchItems(query, page);

  dispatch({
    type: FETCH_NEW_ITEMS,
    payload: { currPage: 1, query, items: results, lastPage },
  });
};

export const loadMoreItems = (page) => async (dispatch, getState) => {
  const {
    search: { query },
  } = getState();
  const { results } = await apiProviders.searchItems(query, page);
  dispatch({
    type: LOAD_MORE_ITEMS,
    payload: { currPage: page, items: results },
  });
};
