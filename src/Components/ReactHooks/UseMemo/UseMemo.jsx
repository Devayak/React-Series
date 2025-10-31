import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0)
    const result=useMemo(()=>{
    console.log("Heavy calculation running...");
    let sum = 0;//sum=45
    for (let i = 0; i < 10; i++) {//i=9 sum=45
      sum += i;
    }
    
    return sum+count;
  },[count])

console.log(result);
  return (
        <div>
             <h3>Result: {result}</h3>
            <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
      </div>
  )
}

export default UseMemo