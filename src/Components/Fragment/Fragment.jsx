
//! what is ReactJs Fragments
// :- they are just the way to group multiple samelevel elements without adding a extra node to the dom

//! use case
// clear dom structure, reduce extra node increase rendering speed, avoid unnecessary markup

//!two way to use
// 1. shorthand <>....</>
// 2.using React.Fragments <React.Fragments>....</React.Fragments>





import React from 'react'



// const Fragment=()=> {
//   return (
//     <div>
//       <h1>Hello from Fragment!</h1>
//       <p>This is visible content rendered by the Fragment component.</p>
//     </div>
//   )
// }


//! 1.shorthand method
// const Fragment=()=> {
//   return (
//     <>
//       <h1>Hello from Fragment!</h1>
//       <p>This is visible content rendered by the Fragment component.</p>
//     </>
//   )
// }


//! second way to use fragments

const Fragment=()=> {
  return (
    <React.Fragment>
      <h1>Hello from Fragment!</h1>
      <p>This is visible content rendered by the Fragment component.</p>
    </React.Fragment>
  )
}

export default Fragment