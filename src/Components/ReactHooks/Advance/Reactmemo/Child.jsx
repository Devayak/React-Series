import React from "react";

function Child({ name }) {
  console.log("Child rendered");
  return <h3>Hello {name}</h3>;
}

export default React.memo(Child)

//before react-memo even if the parent changes but child remain as it is ,then also react re-renders the child component which create a performance waste
// it is a hoc 
//shallow comparison of the component props 

// react memo is created by react to memorise the output of the components and re-render of the change of the props change
// react.memo works perfectly with primitive data type for in case of non -primitive it doesnot work perfectly as in every render the address changes to overcome this usecallback hook is introduced