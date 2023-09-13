const initialState={
    todo:["surya","gt","bike","car"]
}

function todo(state=initialState,action){

    if(action.type==="ADDTODO"){
        return {...state,todo:[...state.todo,action.payload]}
    }
    if(action.type==="DELETODO"){
        var temp=[...state.todo]
        temp.splice(action.payload,1)
        return {...state,todo:[...temp]}
    }
    return state
}

export default todo