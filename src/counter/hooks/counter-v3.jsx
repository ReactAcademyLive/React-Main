import React from 'react';
import MyButton from '../my-button';
import MyTextbox from '../my-textbox'


function useStateWithLocalStorage(initial, localStorageName) {
    const [state, setState] =  React.useState(initial);
    const ref = React.useRef(initial);
    ref.current=state;

    React.useEffect(()=>{
        let savedState = window.localStorage.getItem(localStorageName);
        setState(savedState || ref.current);

        return function cleanup() {
            window.localStorage.setItem(localStorageName, ref.current);
        };
    }, [localStorageName,initial]);

    return [state, setState];
}


export default function Counter(props)  {    
    const [count, setCount] =  useStateWithLocalStorage(props.init || 1, "count");
  
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
            <MyButton onClick={click} incr={1} />
            <MyButton onClick={click} incr={-10} />
            <MyButton onClick={click} incr={100} />
            <MyTextbox value={count} onChange={change} />
        </>);
}