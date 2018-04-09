import { applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);

export default (initialState) => createStore(reducers, initialState, middleware);