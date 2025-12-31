import { useState } from "react";

function Mycomponent(){
const [car,setCar] = useState({
    mfg:2012,
    model:"Mustang",
    company:"Ford"
})

const getMfg=(e)=>{
    setCar(c=>({...c,mfg:e.target.value}))
}

const getModel=(e)=>{
    setCar(c=>({...c,model:e.target.value}))
}

const getCompany=(e)=>{
    setCar(c=>({...c,company:e.target.value}))
}

    return(
        <>
        <h1>Your favorite car is: {car.mfg} {car.company} {car.model} </h1>

        <input type="number" value={car.mfg} onChange={getMfg}></input><br></br>
        <input type="text" value={car.company} onChange={getCompany}></input><br></br>
        <input type="text" value={car.model} onChange={getModel}></input>   
        </>
    );
}
export default Mycomponent;