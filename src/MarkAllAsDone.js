import * as React from 'react';
// import { useState } from 'react';

export default function MarkAllAsDone({todos, setTodos, markAll, setMarkAll}) {
    // const [textState, setTextState] = useState(true);
    
    function handleClick (e) {
        e.preventDefault();
        setTodos(todos.map((t) => {
       if (t.done !== true) 
            return {
              ...t,
              done: true
            } 
      }
      ))
    //   setTextState((b) => !b);
    }
        // return (
        // <button onClick={handleClick}>{textState ? 'Mark All As Done' : 'Unmark All As Done'}</button>
        // )
        return (
            <button onClick={handleClick}>{markAll ? 'Unmark All As Done' : 'Mark All As Done'}</button>
            )
};
/* Reference:
https://codesandbox.io/s/react-material-togglebuttonexample-forked-ypnrq?from-embed=&file=/src/App.tsx:535-549
*/