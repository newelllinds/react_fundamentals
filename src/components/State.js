// State is a JS object where property values of the component are stored
// Managed inside of the component instead of being passed into it (like props)

import { useState } from 'react';


//use effect
const State = () => {
    const [count, setCount] = useState(4)

//function

    function decCount() {
        setCount(count - 1);
    }

    function incCount() {
        setCount(count + 1)
    }
// Inside component return statement = JSX, not JS
    return (
        <>
        <button onClick={decCount}>-</button>
        <span> { count } </span>
        <button onClick= {incCount}>+</button>
        </>
    )
}

export default State;