const SET_POST_TYPE = "set-post-type";
const SET_A_PAGE = "set-a-page";
const SET_B_PAGE = "set-b-page";

const initialState = { postType: "a", aPage: 0, bPage: 0 };

const createPostTypeAction = (payload = "a") => {
  return { type: SET_POST_TYPE, payload };
};
const createAPageAction = () => {
  return { type: SET_A_PAGE };
};
const createBPageAction = () => {
  return { type: SET_B_PAGE };
};

const renderStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_TYPE:
      return { ...state, postType: action.payload };
    case SET_A_PAGE:
      return { ...state, aPage: state.aPage + 1 };
    case SET_B_PAGE:
      return { ...state, bPage: state.bPage + 1 };
    default:
      return state;
  }
};

export default renderStateReducer;
export { createPostTypeAction, createAPageAction, createBPageAction };
