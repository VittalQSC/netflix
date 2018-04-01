import setSearchByOptionAction from './setSearchByOption';
import setSortByOptionAction from './setSortByOption';
import clearAction from './clear';
import fetchFilmsRequest from './fetchFilms';
import fetchGenresRequest from './fetchGenres'

export const setSearchByOption = setSearchByOptionAction;
export const setSortByOption = setSortByOptionAction;
export const fetchFilms = fetchFilmsRequest;
export const fetchGenres = fetchGenresRequest;
export const clear = clearAction;