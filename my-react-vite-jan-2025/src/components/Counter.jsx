import { useEffect, useState } from "react";

export function Counter() {
    //let counter =0;// ordinary Variable
    let [counter,setCounter]=useState(0); //state variable
    useEffect(()=>{
        console.log(counter);
    },[counter]);
    function increment(){
        //counter++;
        // setCounter(counter+1);
        // setCounter(counter+1);
        // setCounter(counter+1);

        // counter++;
        // counter++;
        // setCounter(counter+1);

        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);


        //console.log(counter);
    }
    function decrement(){
        //setCounter(counter-1);

        
        setCounter((prevCounter)=>prevCounter-1);
        setCounter((prevCounter)=>prevCounter-1);
        setCounter((prevCounter)=>prevCounter-1);
        //console.log(counter);
    }
  return (<>
  <h4>Counter Component</h4>
    <button type="button" onClick={decrement}>-</button>
    <span>{counter}</span>
    <button type="button" onClick={increment}>+</button>
  </>);
}
