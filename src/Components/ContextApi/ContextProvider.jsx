import React, { useState } from 'react'
import Context from './Context/Context'
import Profile from './Profile'
import Login from './Login'

const ContextProvider=()=>{
    const [user,setUser]=useState()
    


    return(
        <Context.Provider value={{user ,setUser}}>
            <Login/>
            <Profile/>

        </Context.Provider>
    )

}

export default ContextProvider