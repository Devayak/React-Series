import React from 'react'

const Select = ({id,label, name,value,onChange, options,error,defaultoption}) => {
    console.log(defaultoption);
  return (
    <div className="input-container">
          <label htmlFor={id} >{label}</label>
          <select style={{padding:'6px',marginBottom:'10px'}} name={name} value={value} onChange={onChange}>
           { defaultoption && <option value=""hidden>{defaultoption}</option>}
           

                {
                    options.map((opt,i)=>(
                        <option key={i} value={opt.toLowerCase()}>{opt}</option>
                    ))
                }
             
        
                </select>
                  <label className="text-red-400 absolute top-[5em] ">{error}</label>
          {/* <input id="category" /> */}
        </div>
  )
}

export default Select