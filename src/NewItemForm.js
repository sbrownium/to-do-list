import * as React from 'react';
import { useState } from 'react';

// let nextId = 0;

export default function NewItemForm( {todos, setTodos} ) {
  const [addTodos, setAddTodos] = useState('');
  

  function handleClick (e){
  //  allToDos.concat({value})
  e.preventDefault()
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: addTodos, done: false }
    ])
    setAddTodos('');
    }
  return (
    // <form onSubmit={handleSubmit}> 
    <>
    <form>
      <label>
        New:
      </label>
      <input
        type="text"
        value={addTodos}
        onChange={e => setAddTodos(e.target.value)}
      />
      <input
        type="submit"
        value="add"
        onClick={handleClick}
        onKeyDown={e => e.key === 'Enter' ? handleClick: ''}
      />
    </form>  
</>
  );
}
