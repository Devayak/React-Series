import React from 'react'

const Child = ({ispacked,name}) => {
    // if(!ispacked){
    //     return <li>{name}✅</li>
    //     // return null
    // }//!using if-else
    
  return (
    // <li className="item">{name}</li>
    //! using ternary operator
    // <div>
        
    //     {/* <h1>Sally Ride's Packing List</h1> */}
        
        // <ul>
        //     <del></del>
        //     {/* <li> {ispacked ? <del>{name +'✅'}</del>:name}</li> */}
        //     {/* <li>{name} </li> */}
        // </ul>
        
        //! logical and
        <ul>
            <li>{name}{ispacked && '✅'} </li>
        </ul>
    // </div>
    
  )
}

export default Child

//! drawback is that
//? harder to maintain it make unecessary code structure instead of if-else always recommended to use ternary operator