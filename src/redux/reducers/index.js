import {combineReducers} from "redux";
import {drawerReducer} from "./reducer";


export const reducer =  combineReducers({
    reducer: drawerReducer
});