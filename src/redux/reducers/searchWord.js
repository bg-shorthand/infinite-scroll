const SET_WORD = "set-word";

const initialState = "";

const createSetWordAction = (payload) => {
  return { type: SET_WORD, payload };
};

const searchWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default searchWordReducer;
export { createSetWordAction };
