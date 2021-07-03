import filterSameId from "../../module/filterSameId";

const SET_A_LIST = "set-a-list";
const SET_B_LIST = "set-b-list";
const SET_SEARCH_A_LIST = "set-search-a-list";
const SET_SEARCH_B_LIST = "set-search-b-list";

const initialState = { aList: [], bList: [] };

const setAListAction = (payload) => {
  return { type: SET_A_LIST, payload };
};
const setBListAction = (payload) => {
  return { type: SET_B_LIST, payload };
};
const setSearchAListAction = (payload) => {
  return { type: SET_SEARCH_A_LIST, payload };
};
const setSearchBListAction = (payload) => {
  return { type: SET_SEARCH_B_LIST, payload };
};

const renderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_A_LIST:
      return {
        ...state,
        aList: filterSameId([...state.aList, ...action.payload]),
      };
    case SET_B_LIST:
      return {
        ...state,
        bList: filterSameId([...state.bList, ...action.payload]),
      };
    case SET_SEARCH_A_LIST:
      return { ...state, aList: [...action.payload] };
    case SET_SEARCH_B_LIST:
      return { ...state, bList: [...action.payload] };
    default:
      return state;
  }
};

export default renderListReducer;
export {
  setAListAction,
  setBListAction,
  setSearchAListAction,
  setSearchBListAction,
};
