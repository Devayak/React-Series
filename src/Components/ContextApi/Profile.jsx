import React, { useContext } from 'react'
import Context from './Context/Context'

const Profile = () => {
    const{user}=useContext(Context)
    if(!user) return <div>Please Login</div>
    return <div>Welcome:{user}</div>
}

export default Profile