import { combineReducers } from "redux";

export default combineReducers({
    searchBy: (searchBy = "title", action) => {
        switch (action.type) {
            case "SEARCH_BY":
                return action.payload;
            default:
                return "" + searchBy;
        }
    },
    sortBy: (sortBy = "rating", action) => {
        switch (action.type) {
            case "SORT_BY":
                return action.payload;
            default:
                return "" + sortBy;
        }        
    },
    films: (films = [], action) => {
        switch (action.type) {
            case "SEARCH_FILMS":
                return [...action.payload]
            default:
                return [...films]
        }
    },
    genres: (genres = [], action) => {
        switch (action.type) {
            case "RECIEVE_GENRES":
                return [...action.payload.genres]
            default:
                return [...genres]
        }
    }
})