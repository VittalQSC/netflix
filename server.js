import qs from 'qs' // Add this at the top of the file
import express from 'express';
// import { renderToString } from 'react-dom/server';
// import Html from './public/Html';
import path from 'path';
import handleRender from './handleRender';

const port = 3000;
const server = express();

//Serve static files
server.use('/', express.static('dist'));

server.get('/*', handleRender);

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

