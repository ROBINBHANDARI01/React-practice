import React, { useState } from "react";
function Count(){
    const [count,setCount] = React.useState(0)

    const updateCount=()=>{
        setCount(count + 1);
    }
    const degradeCount=()=>{
        if(count > 0){
        setCount(count -1);
        }
    }
    const reset=()=>{
        setCount(0);
    }

    return(
        <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={updateCount}>Incriment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={degradeCount}>Decriment</button>
        </div>
    );

}
export default Count;