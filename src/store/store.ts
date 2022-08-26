import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducers from "./reducers/reducers";
import saga from "./saga/saga";
import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);
const composeEnhancers = typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const localStorage = loadState()


const store = createStore(
    reducers,
    localStorage,
    composeEnhancers(enhancer)
)

sagaMiddleware.run(saga)

store.subscribe(() => {
    saveState({ userReducer: store.getState().userReducer })
})

export default store

