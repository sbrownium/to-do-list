import * as React from 'react';
import { useState } from 'react';

export default function NewItemForm( {todos, setTodos} ) {
  const [addTodos, setAddTodos] = useState('');
  
  function handleClick (e){
  e.preventDefault()
  if (addTodos.length > 0){
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: addTodos, done: false }
    ])
    setAddTodos('');
    }}
  return (
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
