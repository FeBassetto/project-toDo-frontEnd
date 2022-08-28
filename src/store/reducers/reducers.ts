import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import warningReducer from "./warningReducer";
import loadingReducer from "./loadingReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
    themeReducer,
    userReducer,
    warningReducer,
    loadingReducer,
    taskReducer
})