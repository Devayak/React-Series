import { useState } from "react";
// const states=[1,'deba']
const State = () => {
  let [count, setCount] = useState(0);
//   console.log(setCount);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev)=>{return prev + 1})
          setCount((prev)=>{return prev + 1})
          setCount((prev)=>{return prev + 1})
        }}
      >
        click me to update
      </button>
      {/* <button onClick={()=>{
                setCount((prevstate)=>prevstate+1)
                setCount((prevstate)=>prevstate+1)
                // setCount((prevstate)=>prevstate+1)
            }}>click me to update</button> */}
    </div>
  );
};
export default State;

//! state is used to re-render the updated value directly on the web

// it store the value and then update the value directly on web
//variable and one updater function is the syntax of use-state but to use useState we have to import it first from the react
// useState is a hook that is used to manage the state in functional component
//state is the components local variable ,state is mutable (change )

//? we can use state and props together
