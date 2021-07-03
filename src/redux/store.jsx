import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import renderListReducer from "./reducers/renderList";
import renderStateReducer from "./reducers/renderState";
import searchWordReducer from "./reducers/searchWord";

const rootReducer = combineReducers({
  renderList: renderListReducer,
  renderState: renderStateReducer,
  searchWord: searchWordReducer,
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
