import React, {useState} from "react";

export default function Assignment1(){
    const [temp, setTemp] = useState(15)
    const [mode, setMode] = useState("Hot")
    const [units, setUnits] = useState("F")

    function convertUnits(){
        setTemp(temp+10)
    }
    return(
    
        <div>
            <h2>{mode}</h2>

            <h1>{temp} &nbsp; {units}</h1>
            <button onClick={()=>{setTemp(temp+1)}}>+</button>
            <button onClick={()=>{setTemp(temp-1)}}>-</button>

            
            <hr />
            <br />

            <button onClick={()=>{setMode("Auto")}}>Auto</button>
            <button onClick={()=>{setMode("Hot")}}>Hot</button>
            <button onClick={()=>{setMode("Cold")}}>Cold</button>

            <br />
            <hr />
            <br />

            <button onClick={()=>{setUnits("F")}}>F</button>
            <button onClick={()=>{setUnits("C")}}>C</button>

            <button onClick={()=>{convertUnits()}}>Convert</button>



        </div>
    )
}