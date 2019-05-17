import React from 'react';
import MyButton from './my-button';
import MyTextbox from './my-textbox'


export default function Counter(props)  {
    const [count, setCount] =  React.useState(props.init || 1);
    const ref = React.useRef({});

    React.useEffect(()=>{
        let num =ref.current.num;
        if (+window.localStorage.getItem("count")){
            setTheCount(+window.localStorage.getItem("count"));
        }  
        return () =>{
            window.localStorage.setItem("count", num);
        } 
    }, []);

    function setTheCount(num){
        ref.current.num=num;
        setCount(num);
    }

    function click(incr) {
        setTheCount(count + incr);
    }

    function change(e) {
        if (Number.isInteger(+e.target.value)) {
            setTheCount( +e.target.value );
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