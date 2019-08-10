import React from 'react';
import MyButton from './my-button';
import MyTextbox from './my-textbox';

function useLocalStorage(initial, name){
    const [state, setState] = React.useState(initial);
    const ref = React.useRef();
    ref.current=state;

    React.useEffect(() => {
        let storedState = window.localStorage.getItem(name);
        if (Number.isInteger(+storedState)) {
            storedState = Number(storedState);
        }
        setState(storedState || ref.current);

        return function cleanup() {
            window.localStorage.setItem(name, ref.current);
        }
    },  [name])

    return [state, setState];
}


export default function Counter(props) {
    const [count, setCount] = useLocalStorage(props.init || 1, "count");
       
    function click(incr) {
        setCount(count + incr);
    }

    function change(evt) {
        if (Number.isInteger(+evt.target.value)) {
            setCount(+evt.target.value);
        }
    }

    return (<>
        <h1>The count is: {count} </h1>
        <MyButton onClick={click} incr="1" />
        <MyButton onClick={click} incr="-10" />
        <MyButton onClick={click} incr="100" />
        <MyTextbox value={count} onChange={change} />
    </>);
}
