import * as React from 'react';

export default function Item({ todo, deleteTodo, completeTodo }) {
  function handleDeleteTodo(todo) {
    //return //deleteTodo(todo);
    return () => {
      deleteTodo(todo);
    }
  }

  function handleCompleteTodo(todo) {
    return () => {
      completeTodo(todo);
    }
  }
  return <>
  <li key={todo.id}
    className={todo.done ? 'strikethrough' : ''}
  >
    {todo.text}
    {/* do these buttons need {text, done}? */}
  <button onClick={ handleDeleteTodo(todo) } className='deleteBtn'>delete</button>
  <button onClick={ handleCompleteTodo(todo) }className='doneBtn'>done</button>
  </li>
  </>;
}