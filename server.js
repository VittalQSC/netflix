// import qs from 'qs' // Add this at the top of the file
import express from 'express';
import path from 'path';
import handleRender from './handleRender';
import storeConstructor from './src/store';
import fetchFilm from './src/actions/fetchFilm.js';
import fetchSimilar from './src/actions/fetchSimilar.js';

const port = 3000;
const server = express();

let store = storeConstructor({});

server.use(express.static('dist'));
server.use('/film', express.static('dist'));

// server.get('/*', handleRender);
server.use('/film/:id', (req, res, done) => {
    const searchBy = store.getState().searchBy;
    const fetchFilmProm = fetchFilm(req.params.id, searchBy)(store.dispatch.bind(store));
    const fetchSimilarProm = fetchSimilar(req.params.id, searchBy)(store.dispatch.bind(store));

    Promise.all([fetchFilmProm, fetchSimilarProm]).then(() => {done()});
});

server.get('/*', (req, res) => handleRender(req, res, store));

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

