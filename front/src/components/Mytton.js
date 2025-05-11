import { useState } from "react";
let name = "leeda";

export default function Mytton() {
  const [name , setName] = useState("leeda");
  function buttonClick(){
    setName("welo");
    
   }
    return (
      <div>
        <button onClick={buttonClick}> I'm a button</button>
        <h2>{name}</h2>
      </div>
    );
  }

