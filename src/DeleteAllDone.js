import * as React from 'react';

export default function DeleteAllDone ({todos, setTodos}){
 function handleClick (e) {
    e.preventDefault();
    setTodos(todos.filter((t) =>
    t.done !== true));
  }
    return (
    <button onClick={handleClick}>Remove Done Items</button>
    )
}