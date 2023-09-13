import React from "react";
import {connect} from "react-redux";
function Count(props){
    return(
        <div className="common">
        <h1>Counter {props.c.count}</h1>
        <button onClick={function(){props.dispatch({type:"Inc"})}}>inc</button> &nbsp;
        <button onClick={function(){props.dispatch({type:"Dec"})}}>dec</button>&nbsp;
        <button onClick={function(){props.dispatch({type:"Reset"})}}>reset</button>&nbsp;
        </div>
    )
}
export default connect(function(store){return(store)})(Count)