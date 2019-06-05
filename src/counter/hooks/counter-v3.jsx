import React from 'react';
import MyButton from '../my-button';
import MyTextbox from '../my-textbox'


function useStateWithLocalStorage(initial, localStorageName) {
    const [state, setState] =  React.useState(initial);
    const ref = React.useRef();
   
    function mySetState(newState){
        ref.current=newState;
        setState(newState);
    }

    React.useEffect(()=>{
        alert("effect1")
       
        return () => {
            alert("cleanup1")
        } ;
    });

    React.useLayoutEffect(()=>{
        alert("effect2")
        if (+window.localStorage.getItem(localStorageName)){
            mySetState(+window.localStorage.getItem(localStorageName));
        }  
        return () => {
            alert("cleanup2")
            window.localStorage.setItem(localStorageName, ref.current);
        } ;
    }, [localStorageName]);

    React.useEffect(()=>{
        alert("effect3")
       
        return () => {
            alert("cleanup3")
        } ;
    });

    React.useLayoutEffect(()=>{
        alert("effect4")
       
        return () => {
            alert("cleanup4")
        } ;
    });
  
    return [state,mySetState];
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
            <MyButton onClick={click} incr="1" />
            <MyButton onClick={click} incr="-10" />
            <MyButton onClick={click} incr="100" />
            <MyTextbox value={count} onChange={change} />
        </>);
}