import React, { useContext, useState } from 'react'
import Context from './Context/Context'

const Login = () => {
    const[username,setUsername]=useState()
    const[password,setPassword]=React.useState()
    const { setUser } = useContext(Context)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser(username,password)
    }
  return (
    <div>
        <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder='password'onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login