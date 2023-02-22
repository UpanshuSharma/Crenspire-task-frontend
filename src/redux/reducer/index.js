import { combineReducers } from "redux";
import { UserAuthReducer } from "./UserAuthReducer";
import { DataReducer } from "./DataReducer";
export const reducers = combineReducers({
  UserAuthReducer,
  DataReducer,
});
