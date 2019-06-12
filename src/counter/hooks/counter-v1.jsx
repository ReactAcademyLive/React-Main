import React from 'react';
import MyButton from '../my-button';
import MyTextbox from '../my-textbox'

//simple use of hooks.  No effects (so no save or restore of the counter value)
export default function Counter(props)  {
    const [count, setCount] =  React.useState(props.init || 1);
    
    function click(incr) {
        setCount(count + incr);
    }

    function change(e) {
        if (Number.isInteger(+e.target.value)) {
            setCount( +e.target.value );
        }
    }

    return (<>
            <h1>the count is: {count} </h1>
            <MyButton onClick={click} incr="1" />
            <MyButton onClick={click} incr="-10" />
            <MyButton onClick={click} incr="100" />
            <MyTextbox value={count} onChange={change} />
        </>);

}