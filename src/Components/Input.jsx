import React from 'react'

const Input = ({label,id,name,value,onChange,error}) => {
  return (
  <div className="input-container">
          <label htmlFor="title">{label}</label>
          <input id={id} name={name} value={value}  onChange={onChange}/>
          <label className="text-red-400 absolute top-[3.5em] ">{error}</label>
        </div>
  )
}

export default Input