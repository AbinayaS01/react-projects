import { Fragment, useState } from "react";
let toggle=true;
export function ToggleName(){
let [dName,setDName]=useState(''); 
    
    function displayName(){
        if(toggle){

            setDName("Abi");
        }
        else{
            setDName("");
        }
        toggle=!toggle;
        

    }
    return (
        <>
            <h3>Toggle Name Component</h3>
            <button type="button" onClick={displayName}>Click</button>
            <h5>{dName}</h5>
        </>
    );
}