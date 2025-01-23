import { useState } from "react"

export function CaptureTextData(){
    let [nameData,setNameData]=useState("");
    function handleChange(event){
        console.log(event.target.value);
    }
    return(
        <>
        
        <div className="container m-5">
        <h2>Capture text box data...</h2>
        <div className="form-control-group">
            <label htmlFor="text-box" className="form-label">Name:{""}</label>
            <input type="text" id="text-box" placeholder="Enter name" className="form-control"
            onChange={(event)=>handleChange(event)}
            ></input>
        </div>
        </div>
        </>
    )
}