import * as React from 'react';

export default function MarkAllAsDone({todos, setTodos, markAll}) {  
    function handleClick (e) {
        e.preventDefault();
        if (markAll) {
            setTodos(todos.map((t) => {
                return {
                    ...t,
                    done: false
                } 
            }))
        }
        else {
            setTodos(todos.map((t) => {
                // if (t.done !== true) 
                    return {
                        ...t,
                        done: true
                    } 
            }))
    }}
    return (
        <button onClick={handleClick}>{markAll ? 'Unmark All As Done' : 'Mark All As Done'}</button>
    )
};


/* Reference:
https://codesandbox.io/s/react-material-togglebuttonexample-forked-ypnrq?from-embed=&file=/src/App.tsx:535-549
*/