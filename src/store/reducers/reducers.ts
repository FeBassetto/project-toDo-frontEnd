import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

export default combineReducers({
    themeReducer,
    userReducer
})