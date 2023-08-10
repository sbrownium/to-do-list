import * as React from 'react';
import { useState } from 'react';

export default function DeleteAllDone (){
 function handleClick (e) {
    e.preventDefault();
    return () => {
        setTodos(todos.filter(t =>
         t.done === true))
      };
  }
    return 
    <button onClick={handleClick}>Delete All Done</button>

}