import React, {useState} from "react";

export default function Assignment1(){
    const [temp, setTemp] = useState(15)
    return(
    
        <div>
            <h1>{temp}</h1>
            <button onClick={()=>{setTemp(temp+1)}}>+</button>
            <button onClick={()=>{setTemp(temp-1)}}>-</button>
        </div>
    )
}