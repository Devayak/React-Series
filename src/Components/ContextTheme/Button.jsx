import React, { useContext } from 'react'
import Context from './Contexts/Context';

const Button = () => {
    const {theme,setTheme}=useContext(Context)
    const change=()=>{
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        console.log(theme);
    }
  return (
    <div onClick={change} className='bg-red-400'>Button</div>
  )
}

export default Button