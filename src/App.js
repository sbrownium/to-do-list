import * as React from 'react';
import { useState } from 'react';
// import Item from './Item';
import NewItemForm from './NewItemForm';
import List from './List';
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
     if (t.id === todo.id) {
      return {
        ...t,
        done: true
      }
     }
     else {
      return t;
     }
}))};
  


//see if setTodos and filter is working

  return (
    <div>
      <h1>To Dos</h1>
      {/* <ul>
        <Item text="scott" index="01" />
      </ul> */}
      <List todos={ todos } deleteTodo={ deleteTodo } completeTodo={ completeTodo }/>
      <NewItemForm todos={ todos } setTodos={ setTodos }/>
    </div>
  );
}
// list item compenenet
// some kind of check box
/*
Functinoality:
• add item
• check as done
• remove item
• removal checked off

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
