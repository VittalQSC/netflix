import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './store'
import './index.css';
import './App.css';
import App from './App';

// ReactDOM.render(
ReactDOM.hydrate(
<Provider store={store}>
    <Router> 
        <App />
    </Router>
</Provider>, document.getElementById('root'));
