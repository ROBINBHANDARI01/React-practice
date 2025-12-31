function Myfunc(){
  return(
    <h1>hi this is how react is used</h1>
  );
}
export default function Myapp(){
  return(
    <div>
    <Header/>
    <Myfunc/>
    <button>Let's go</button>
    </div>
  );
}
 import Header from "./header";
