import { useState, useMemo } from 'react';
import NewItemForm from './NewItemForm';
import List from './List';
import DeleteAllDone from './DeleteAllDone';
import MarkAllAsDone from './MarkAllAsDone';
import './style.css';
import './App.css';


export default function App() {
  const initialSetTodos = [
    {text: 'Initial 1', id: 222 , done: false},
    {text: 'Initial 2', id: 223 , done: false},
    {text: 'Initial 3', id: 224 , done: false}
  ];
  const [todos, setTodos] = useState(initialSetTodos);
  const markAll = useMemo(
    () => (todos.every(todo =>
          todo.done === true)),
    [todos]
  );

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
  }))
};

return (
    <div>
      <h1>To Dos</h1>
      <List
        todos={ todos }
        deleteTodo={ deleteTodo }
        completeTodo={ completeTodo }
      />
      <MarkAllAsDone
        todos={ todos }
        setTodos={ setTodos }
        markAll={ markAll }
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
• remove all checked off - done
• add keys that are not just indices - done
• add more tests

Display:
• Unchecked/undone items - done
• box or whatever next item to check off - done
• Title - done
• Add item button - done
• text box for new items - done
• check off all items - done

7/28 Homework:
• upload app to Git ✓
• write a unit test that can be run automatically that can be run with `NPM run test` (look at package json)

*/
