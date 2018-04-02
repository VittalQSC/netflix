import { applyMiddleware, createStore } from "redux";
import { fetchGenres } from './actions';
import reducers from './reducers';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);

// // Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__ || {};

// // Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__

// let store = createStore(reducers, preloadedState, middleware);
let store = createStore(reducers, {}, middleware);
store.dispatch(fetchGenres());
export default store;