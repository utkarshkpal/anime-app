import { combineReducers } from "redux";
import {
  SET_DATA,
  SET_CURR_PAGE,
  SET_QUERY,
  SET_LAST_PAGE,
  ADD_DATA,
} from "actions/actions";

const blankState = {
  items: [],
  currPage: 1,
  query: "naruto",
  lastPage: 1,
};

export function appReducer(state = blankState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, items: [...action.payload] };
    case ADD_DATA:
      return { ...state, items: [...state.items, ...action.payload] };
    case SET_CURR_PAGE:
      return { ...state, currPage: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_LAST_PAGE:
      return { ...state, lastPage: action.payload };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
