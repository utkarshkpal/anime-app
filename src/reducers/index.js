import { combineReducers } from "redux";
import { FETCH_NEW_ITEMS, LOAD_MORE_ITEMS } from "actions/actions";

const blankState = {
  items: [],
  currPage: 1,
  query: "naruto",
  lastPage: 1,
};

export function searchReducer(state = blankState, action) {
  switch (action.type) {
    case FETCH_NEW_ITEMS:
      return {
        ...state,
        currPage: action.payload.currPage,
        query: action.payload.query,
        items: action.payload.items,
        lastPage: action.payload.lastPage,
      };
    case LOAD_MORE_ITEMS:
      return {
        ...state,
        currPage: action.payload.currPage,
        items: [...state.items, ...action.payload.items],
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
