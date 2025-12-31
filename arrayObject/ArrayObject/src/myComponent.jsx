import { useState } from "react";

function Obj() {

    const [val, setVal] = useState([])
    const [carYear, setYear] = useState("")
    const [carModel, setModel] = useState("")
    const [carCompany, setCompany] = useState("")

    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            model: carModel,
            compaly: carCompany
        }
        setVal([...val, newCar])
        setCompany("")
        setModel("")
        setYear("")
    }    

    const handleYear = (e) => {
        setYear(e.target.value)
    }

    const handleModel = (e) => {
        setModel(e.target.value)
    }

    const handleCompany = (e) => {
        setCompany(e.target.value)
    }

    const handleKeyDown=(e)=>{
        if(e.key ==="Enter"){
            handleAddCar();
            clearFelids();
        }
    }

    return (
        <>
            <h1>This is your fav car details</h1>
            <ol>{
                val.map((name, index)=>
                    <li key={index}>{name.year} {name.model} {name.compaly}
                    </li>)
                }
    </ol>
            <input type="text" id="model" placeholder="Enter Model name" value={carModel}onChange={handleModel}></input><br></br>
            <input type="text" id="company" placeholder="Enter Company " value={carCompany} onChange={handleCompany}></input>
            <br></br>
            <input type="text" id="year" placeholder="Enter year" value={carYear} onChange={handleYear} onKeyDown={handleKeyDown}></input><br></br>
            <button onClick={handleAddCar}>Submit</button>
        </>
    );
}
export default Obj;