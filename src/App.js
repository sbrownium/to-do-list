import * as React from 'react';
import { useState } from 'react';
// import Item from './Item';
import NewItemForm from './NewItemForm';
import List from './List';
import DeleteAllDone from './DeleteAllDone';
import './style.css';
import './App.css';


export default function App() {
  const initialSetTodos = [
    {text: 'Initial 1', id: 222 , done: false},
    {text: 'Initial 2', id: 223 , done: false},
    {text: 'Initial 3', id: 224 , done: false}
  ];
  const [todos, setTodos] = useState(initialSetTodos);
 
  function deleteTodo(todo) {
    setTodos(todos.filter(t =>
     t.id !== todo.id))
  };

  function completeTodo(todo) {
    setTodos(todos.map((t) => {
     if (t.id === todo.id && t.done === false) {
      return {
        ...t,
        done: true
      }
     } else if (t.id === todo.id && t.done === true){
      return {
        ...t,
        done: false
      }
     }
     else {
      return t;
     }
     
}))};

  return (
    <div>
      <h1>To Dos</h1>
      <List
        todos={ todos }
        deleteTodo={ deleteTodo }
        completeTodo={ completeTodo }
      />
      <DeleteAllDone
        todos={ todos }
        setTodos={ setTodos }
      />
      <NewItemForm
        todos={ todos }
        setTodos={ setTodos }
      />
    </div>
  );
}
// list item compenenet
// some kind of check box
/*
Functinoality:
• add item - done
• check as done - done
• uncheck as done - done
• remove item - done
• remove all checked off

Display:
• Unchecked/undone items
• box or whatever next item to check off
• Title
• Add item button
• text box for new items
• check off all items

7/28 Homework:
• upload app to Git ✓
• write a unit test that can be run automatically that can be run with `NPM run test` (look at package json)

*/
