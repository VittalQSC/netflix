import { path, key } from "./config";
import fetchFilmsSuccess from './fetchFilmsSuccess';

export default (search, searchBy) => dispatch => fetch(
        `${path}search/${searchBy == "title" ? "movie" : searchBy}?${key}&query=${search}&page=1`
    )
    .then(response => response.json())
    .then(response => dispatch(fetchFilmsSuccess(response.results)))
    .catch(errors => dispatch({type: "err"}))