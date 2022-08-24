import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import warningReducer from "./warningReducer";

export default combineReducers({
    themeReducer,
    userReducer,
    warningReducer
})