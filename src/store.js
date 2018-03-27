import { applyMiddleware, createStore } from "redux";
import { fetchGenres } from './actions';
import reducers from './reducers';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);

let store = createStore(reducers, {}, middleware);
store.dispatch(fetchGenres());
export default store;