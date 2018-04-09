import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from './src/App';
import { StaticRouter as Router, Route, Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import renderFullPage from './public/html';

export default function handleRender(req, res, store) {
    let context = {};

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();
    
    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <Router location={req.url} context={{}}>
                <App />
            </Router>
        </Provider>
    )

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}