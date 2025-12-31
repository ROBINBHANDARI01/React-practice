import List from './list';
import Button from './Button';
import React from 'react';


const Vegies = [
  { id: 1, name: "Carrot", cal: 42 },
  { id: 2, name: "Raddish", cal: 22 },
  { id: 3, name: "Muli", cal: 52 },
  { id: 4, name: "Pumpkin", cal: 32 }
]

const Fruits = [
  { id: 5, name: "Mango", cal: 10 },
  { id: 6, name: "Apple", cal: 9 },
  { id: 7, name: "Kiwi", cal: 7 },
  { id: 8, name: "Banana", cal: 32 },
]
function App() {
  const [count,setCount] = React.useState(0);
  
  return (
    <>
    <Button count = {count} setCount = {setCount}></Button>
      <List items={Fruits} category = "Fruits"></List>
      <List items={Vegies} category = "Vegitables"></List>
    </>
  );
}
export default App; 