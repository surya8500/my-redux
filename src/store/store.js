 import { combineReducers, createStore, } from "redux";
import todo from "../Reduce/todo";
import Counter from "../Reduce/counter";
 const reducer=combineReducers({c:Counter,t:todo})
 const store= new createStore(reducer)
 export default store ;
