import { path, key } from "./config";
import fetchFilmSuccess from './fetchFilmSuccess';

export default (id, searchBy) => dispatch => fetch(`${path}${searchBy === "title" ? "movie" : "tv"}/${id}?${key}`)
    .then(response => response.json())
    .then(response => dispatch(fetchFilmSuccess(response)))
    .catch(errors => dispatch({ type: "err" }))