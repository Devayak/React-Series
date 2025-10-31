//useEffect is the way that allow to handle side effect in components side effects are nothing that are outside of react rendering system like fetch api starting or clearing timer and so on 

//? if we dont use useEffect hook then it run on every render every time state change the component is re-renders  

//! syntax :
//? useEffect(()=>{

//? },[dependencies]) first first argument contains the side effect code and the second one contain the state on which the re-render depends if the  depencies change then only the effect will be re-run  

//! useCases: fetch data, subscribing to details   (  window.addEventListener('scroll', handleScroll);)

// two type of depemcies 
//? one is empty [] which ensure that the effect render only for one time that is initial render 
// useEffect(() => {
//   // Execute side effects
// }, [])
//? second one is allow to control when the effect runs based on the changes in specific value 
// useEffect(() => {
//   // Execute side effects
// }, [name]

import React from 'react'
import App1 from './App1'
import './index.css'

const UseEffect = () => {
  return (
    <div>
        <App1/>
        </div>
  )
}

export default UseEffect
