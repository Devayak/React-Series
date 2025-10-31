import React, { useEffect, useState } from 'react'

const Scroll = () => {
  const [count,setCount]=useState(0)
  const [val, setVal] = useState(0)
useEffect(()=>{

  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setVal(data))
},[count])
  console.log('effect ran');// named dependency means when the depency that is count changes then the function get re-render
  return (
    <div><h2>{count}</h2>
    <button onClick={()=>setCount(prev=>prev+1)}>+</button>
    <pre>{JSON.stringify(val)}</pre></div>
  )
}

export default Scroll