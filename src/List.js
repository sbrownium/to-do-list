import * as React from 'react';
import Item from './Item';

// TODO id problem
export default function List ({ todos, deleteTodo, completeTodo }){
  return (
    <ul>
  {todos.map(({ text, id, done }) => (
      <Item className={done && 'strikethrough'} text={text} id={id} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
         ))}
       </ul> 
  )
}

