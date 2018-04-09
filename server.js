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
    const CollectResponses = (resNumber) => {
        let counter = 0;
        return () => {
            counter++; 
            if (counter === resNumber) {
                done();
            }
        }
    };
    const collectResponses = CollectResponses(2, done);
    const searchBy = store.getState().searchBy;
    fetchFilm(req.params.id, searchBy)(store.dispatch.bind(store)).then(() => {
        collectResponses();
    });
    fetchSimilar(req.params.id, searchBy)(store.dispatch.bind(store)).then(() => {
        collectResponses();
    });
});

server.get('/*', (req, res) => handleRender(req, res, store));

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

