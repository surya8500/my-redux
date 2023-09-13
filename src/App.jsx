import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Count from "./Count";

import Todolist from "./Todolist";
function App(){

  return( 
  <Provider store={store} >
    <div className="common">
      <h1>hello edupoly</h1>
       <Count></Count>
       <Todolist></Todolist>
    </div>
  </Provider>
      
      
       
  )
}
export default App