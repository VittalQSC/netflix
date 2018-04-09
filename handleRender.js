import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from './src/App';
import { StaticRouter as Router, Route, Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import { matchRoutes } from 'react-router-config';

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
    `
}

export default function handleRender(req, res, store) {
    // debugger;
    // const branch = matchRoutes([
    //     {
    //         path: '/film/:filmId/'
    //     }
    // ], req.url);
    // console.log(branch)
    // Create a new Redux store instance
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