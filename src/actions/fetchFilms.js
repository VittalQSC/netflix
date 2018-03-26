import { path, key } from "./config";
import fetchFilmsSuccess from './fetchFilmsSuccess';
console.log(path, key)
export default search => dispatch => fetch(`${path}search/movie?${key}&query=${search}&page=1`)
    .then(response => response.json())
    .then(response => dispatch(fetchFilmsSuccess(response.results)))
    .catch(errors => dispatch({type: "err"}))