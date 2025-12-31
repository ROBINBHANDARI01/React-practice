import Card from "./card";
import Greeting from "./UserGreeting";
import N from "./nav";


function App(){
  return(
    <>
    <Greeting isLogin = {true} name="Robin" ></Greeting>
    <N/>
    <Card name="Robin Singh Bhandari" details="I am a fullstack developer and i am currently learning react js which is a realy great library for frontend dev."/> 
    <Card name="Jhon Doe" details="This is an anonymous entity"></Card>
    </>
  );
}
export default App;