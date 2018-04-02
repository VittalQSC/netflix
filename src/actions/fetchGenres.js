import { path, key } from "./config";
import fetchGenresSuccess from './fetchGenresSuccess';
import fetch from 'fetch-everywhere';

export default search => dispatch => fetch(`${path}genre/movie/list?${key}&language=en_EN`)
    .then(response => response.json())
    .then(response => dispatch(fetchGenresSuccess(response)))
    .catch(errors => dispatch({ type: "err" }))