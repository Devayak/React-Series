// import React, { useRef } from 'react'

import { useRef, useState } from "react"

const UseReff = () => {
  // const mrReff=useRef()

  // const onChange=()=>{
  //   //  console.log(mrReff.current);
  //   mrReff.current.value='Khuntiya'
  //    console.log(mrReff.current.value);

  //! without usereff only use useState

  const [name,setName]=useState('Debasish Nayak')
  const handleName=()=>{
    setName('anayaya')
  }


//! using innertExt
const changeName=()=>{
  let name=document.querySelector('.name')
  name.innerText='nanananananaanananananan'
}

//! useRef

const MYref=useRef()
console.log(MYref);
const changeRef=()=>{
  MYref.current.innerText='ananaya khuntiya'
  console.log('render');
}

 
  return (
    // <div>
    //     <form >
    //         <input type="text" placeholder='name' ref={mrReff}/>
            
    //         <button type='button' onClick={onChange}>click</button>
    //     </form>
    // </div>

    <div>
      <h1 className="name">Debasish</h1>
      <h3 ref={MYref} >Debanshee</h3>
      <h2>{name}</h2>
      <button onClick={changeName}>innerText</button>
      <button onClick={handleName}>useState</button>
      <button onClick={changeRef}>UseRef</button>
    </div>
  )
}

export default UseReff

///usereff benefit 
// it does not re-render on evry update 
// it remember the updated value and when we set it show the current updated value
