import * as React from 'react';

export default function Item({ text, id, deleteTodo, completeTodo }) {
  function handleDeleteTodo(todo) {
    //return //deleteTodo(todo);
    return () => {
      deleteTodo(todo);
    }
  }

  function handleCompleteTodo(todo) {
    //return //deleteTodo(todo);
    return () => {
      completeTodo(todo);
    }
  }
  return <>
  <li key={id}>{text}
  <button onClick={ handleDeleteTodo({ text, id }) }>delete</button>
  <button onClick={ handleCompleteTodo({ text, id }) }>done</button>
  </li>
  </>;
}
 