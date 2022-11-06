import React, {useState} from "react";

export default function Assignment1(){
    const [temp, setTemp] = useState(15)
    const [mode, setMode] = useState("Hot")
    return(
    
        <div>
            <h1>{temp}</h1>
            <button onClick={()=>{setTemp(temp+1)}}>+</button>
            <button onClick={()=>{setTemp(temp-1)}}>-</button>

            <h2>{mode}</h2>
            <hr />
            <br />

            <button onClick={()=>{setMode("Auto")}}>Auto</button>
            <button onClick={()=>{setMode("Hot")}}>Hot</button>
            <button onClick={()=>{setMode("Cold")}}>Cold</button>


        </div>
    )
}