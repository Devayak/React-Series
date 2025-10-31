// import React, { useState } from 'react'
// //!without what will be the problem
// const Useref = () => {
//     const[focus,setFocus]=useState(false)
//     const handleFocus=()=>{
//         setFocus(true)
//         console.log('rendered');
//     }
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h2>Without useRef</h2>
//         <input 
//         type="text" 
//         placeholder='type something'
//         autoFocus={focus}/>

//         <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   )
// }

// export default Useref

// import React, { useRef } from "react";

// const WithUseRef = () => {
//   const inputRef = useRef(null); // create reference

//   const handleFocus = () => {
//     console.log('rendered');
//     inputRef.current.focus(); // directly focus the input
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>With useRef ✅</h2>
//       <input ref={inputRef} type="text" placeholder="Type something..." />
//       <br /><br />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// };

// export default WithUseRef;
// import React, { useState } from "react";

// const WithoutRef = () => {
//   const [count, setCount] = useState(0);
//   const [myValue, setMyValue] = useState(0);

//   const handleCount = () => {
//     setCount(count + 1);
//     setMyValue(count + 1);
//     console.log("rendered");
//   };

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <h3>Value: {myValue}</h3>
//       <button onClick={handleCount}>Click</button>
//     </div>
//   );
// };

// export default WithoutRef;


import React, { useState, useRef } from "react";

const WithRef = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const myRef = useRef(0);
console.log(myRef);
  

  const handleCount = () => {
   myRef.current = myRef.current + 1;
    console.log(myRef);
    console.log("rendered");
    setCount(myRef.current)
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>Ref Value: {myRef.current}</h3>
      <button onClick={handleCount}>Click</button>
    </div>
  );
};

export default WithRef;
