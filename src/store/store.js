import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import { uiReducer } from '../reducers/uiReducer';
import { usersReducer } from '../reducers/usersReducer';

// Configuration to use Redux chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    ui: uiReducer,
    users: usersReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);