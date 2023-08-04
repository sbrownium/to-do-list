import * as React from 'react';
import { useState } from 'react';

let nextId = 0;

export default function NewItemForm( {todos, setTodos} ) {
  const [addTodos, setAddTodos] = useState('');
  

  function handleClick (e){
  //  allToDos.concat({value})
  e.preventDefault()
    setTodos([
      ...todos,
      { id: nextId++, text: addTodos, done: false }
    ])
    setAddTodos('');
    // return (
    //   <ul>
    //      {todos.map(artist => (
    //               <li key={artist.id}>{artist.name}</li>
    //             ))}
    //           </ul>
    // )
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
      <input type="submit" value="add" onClick={handleClick} />
    </form>  
          
 
</>
  );
}


// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
