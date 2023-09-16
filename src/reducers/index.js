import authenReducer from "./authentication";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authenReducer
});
export default allReducers;