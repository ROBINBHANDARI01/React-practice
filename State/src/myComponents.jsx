import React from "react";

function Mycomp(){
   const [name,setName] = React.useState("Guest")
   const[age,setAge] = React.useState(0);
    const [emp,Employed] = React.useState();

const UpdateName =()=>{
    setName("Robin");
}

const UpdateAge=()=>{
    setAge(age +1);
}

const isEmployed=()=>{
    Employed(!emp);
}
return(
    <div className="details">
    <h1>Name: {name}</h1>
    <button onClick={UpdateName}>Get name</button>

    <h1>Age: {age}</h1>
    <button onClick={UpdateAge}>Get Age</button>

    <h1>{emp ? "Yes" : "No"}</h1>
    <button onClick={isEmployed}>Employed</button>
    </div>
);
}
export default Mycomp;