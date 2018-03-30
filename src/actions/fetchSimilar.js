import { path, key } from "./config";
import fetchFilmsSuccess from './fetchFilmsSuccess';

export default (id,  searchBy) => dispatch => fetch(`${path}${searchBy === "title" ? "movie" : "tv"}/${id}/similar?${key}`)
    .then(response => response.json())
    .then(response => dispatch(fetchFilmsSuccess(response.results)))
    .catch(errors => dispatch({ type: "err" }))