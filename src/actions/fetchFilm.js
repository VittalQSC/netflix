import { path, key } from "./config";
import fetchFilmSuccess from './fetchFilmSuccess';

export default id => dispatch => fetch(`${path}movie/${id}?${key}`)
    .then(response => response.json())
    .then(response => dispatch(fetchFilmSuccess(response)))
    .catch(errors => dispatch({ type: "err" }))