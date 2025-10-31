//! conditional rendering
//? it means based on certain condition if the condition passed then it will render that output and if not passed the condition then it will not render 
// there are there ways for this
//! 1.if-else (/! drawback is that
//? harder to maintain it make unecessary code structure instead of if-else always recommended to use ternary operator)
//! 2.ternary operator
//! 3. logical and (&&)

//? all examples are in child.jsx file


import React from 'react'
import Child from './Child'
import style from './parent.module.css'
// import './index.css'

const Parents = () => {
    const data=[
        {ispacked:true,name:'Space sui'},
        {ispacked:true,name:'Helmet with a golden leaf'},
        {ispacked:false,name:'Photo of Tam'}
    ]
  return (
    <div className={style.mainDiv}>
        <h1>Sally Ride's Packing List</h1>
        { data.map((items)=>{
    return(<Child ispacked={items.ispacked} name={items.name}/>)
  })}
   
    </div>
    
    
  )
}

export default Parents