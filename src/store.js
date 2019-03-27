import {createStore, applyMiddleware, compose} from "redux";
import reducer from 'reducers/quotepage';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk)
);

export const store = createStore(reducer, enhancer);


