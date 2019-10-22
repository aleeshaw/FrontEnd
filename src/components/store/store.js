import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialFormState = {
  id: null,
  name: "",
  description: "",
  price: "",
  location: "",
  category: ""
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialFormState,
  applyMiddleware(...middleware)
);

export default store;
