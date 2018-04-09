import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import storeConstructor from './store'
import { fetchGenres } from './actions';
import './index.css';
import './App.css';
import App from './App';


let store = storeConstructor(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;
store.dispatch(fetchGenres());


// ReactDOM.render(
ReactDOM.hydrate(
<Provider store={store}>
    <Router> 
        <App />
    </Router>
</Provider>, document.getElementById('root'));
