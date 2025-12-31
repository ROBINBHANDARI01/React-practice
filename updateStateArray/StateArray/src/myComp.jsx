import { useState } from "react";

export default function Mycomp() {
  const [foods, setFood] = useState(["banana", "mango", "apple"]);
  const [input, setInput] = useState("");

  const addFruits = () => {
    if (input.trim() === "") return;

    setFood(prev => [...prev, input]);
    setInput("");
  };

  const removeFruit = () => {
    setFood([]);
  };

  const handleKeyDown=(e)=>{
if(e.key === "Enter"){
    addFruits()
}
  }

  const removeOne = (index) => {
    setFood(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Fruit List:</h1>

      <ol>
        {foods.map((food, index) => (
          <li key={index} onClick={() => removeOne(index)}>
            {food}
          </li>
        ))}
      </ol>

      <input
        type="text"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addFruits}>Add Fruit</button>
      <button onClick={removeFruit}>Remove all</button>
    </>
  );
}
