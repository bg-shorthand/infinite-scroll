import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import renderListReducer from "./reducers/renderList";
import renderStateReducer from "./reducers/renderState";

const rootReducer = combineReducers({
  renderList: renderListReducer,
  renderState: renderStateReducer,
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
