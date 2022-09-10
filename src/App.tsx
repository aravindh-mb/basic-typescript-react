import "./styles.css";
import { IApp } from "./InterfaceApp";
export default function App(props:IApp) {
  const style ={
    color:"red",
  }
  return (
    <div className="App" style={{color:style.color}} >
      {props.name} , {props.age}
    </div>
  );
}
