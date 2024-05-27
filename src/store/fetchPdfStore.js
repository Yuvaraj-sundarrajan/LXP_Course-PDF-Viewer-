import { createStore,combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import fetchPdfReducer from "../reducers/FetchPdfReducer";
import fetchPdfApi from "../Middleware/FetchPdfMiddleware";
 const rootReducer=combineReducers({
    fetchPdf:fetchPdfReducer,
   
 })

 const Store=createStore(
    rootReducer,applyMiddleware(thunk,fetchPdfApi)
 );
 export default Store;