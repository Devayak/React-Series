import React, { useCallback, useState } from 'react'
import Children from './Children';

const Usecallback = () => {

     const [count,setCount]=useState(0)
    // const[val,setVal]=useState(10)
    console.log('parent component');

    const demo=useCallback(()=>{
        console.log('demo function');
        return 21
    },[count])
  return (
    <div>
        <h1>{count}</h1>
       
        <button onClick={()=>setCount(count+1)}>click</button>
        <Children demo={demo}/>
    </div>
  )
}

export default Usecallback



//react introduced useCallback hook to remember the function refference between render.
// if we provide any dependencies untill that react uses the same function 
 