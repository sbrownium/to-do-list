import * as React from 'react';
import Item from './Item';

// TODO id problem
export default function List ({ todos, deleteTodo, completeTodo }){
  return (
    <>
    <ul>
  {todos.map((todo) => (
      <Item 
      // className={done && 'strikethrough'}
      todo={todo}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      />
         ))}
       </ul> 
       <DeleteAllDone 
        
       />
       </>
  )
}
// {done && 'strikethrough'}
// {done ? 'strikethrough' : ''}