import setSearchByOptionAction from './setSearchByOption';
import setSortByOptionAction from './setSortByOption';
import clearAction from './clear';
import fetchFilmsRequest from './fetchFilms';
import fetchFilmRequest from './fetchFilm';
import fetchSimilarRequest from './fetchSimilar';
import fetchGenresRequest from './fetchGenres'

export const setSearchByOption = setSearchByOptionAction;
export const setSortByOption = setSortByOptionAction;
export const fetchFilms = fetchFilmsRequest;
export const fetchFilm = fetchFilmRequest;
export const fetchSimilar = fetchSimilarRequest;
export const fetchGenres = fetchGenresRequest;
export const clear = clearAction;