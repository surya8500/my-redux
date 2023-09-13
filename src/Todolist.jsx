import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import {connect} from "react-redux";


function Todolist(props){
    var [newt,setNewt]=React.useState()
    return(
    <div className="common">    
        <h1>todo list</h1>
        <input type="text" onChange={(e)=>{setNewt(e.target.value)}}/>
        <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newt})}}>add todo</button>
        {props.t.todo.map(function(s,i){
            return(<li>{s}</li>)
        })}
    </div>
    )
}
export default connect(function(store){return store})(Todolist)