import React, { useState } from "react";
import Child from "./Child";
import Demo from "./Demo";


 function Parent() {
  const [count, setCount] = useState(0);
//   const fun=()=>{
//     console.log('function ');
//   }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
      <Child name='ananaya' />
      <Demo name='deba'/>
    </>
  );
}
export default Parent
