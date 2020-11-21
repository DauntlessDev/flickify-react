import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
