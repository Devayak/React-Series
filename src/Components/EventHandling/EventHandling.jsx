import React from 'react'
import AppleBasket from './AppleBasket'
import AppleCounter from './AppleCounter'

const EventHandling = () => {
  return (
   <AppleCounter/>
  )
}

export default EventHandling

//! react has it own event handling system known as synthetic events 
// rule:
//1. in react the event name are written in camelcase
//2. in react always function is passed as event handler instead of string
