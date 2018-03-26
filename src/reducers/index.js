import { combineReducers } from "redux";


export default combineReducers({
    searchBy: (searchBy = "title", action) => {
        switch (action.type) {
            case "SEARCH_BY":
                return action.payload;
            default:
                return "" + searchBy;
        }
    }
})