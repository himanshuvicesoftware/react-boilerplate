import {combineReducers } from "redux"
import listReducer from './listDemo/listDemo.reducer';
import tableReducer from './displayTable/displayTable.reducer'

export default combineReducers  ({
    list:listReducer,
    table: tableReducer
   // user:""
});