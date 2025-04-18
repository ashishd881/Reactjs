import React,{useContext} from 'react'            //rfce
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)          //data lene ke liye user ka use kar liya
    if(!user)
    {
        return (
            <div>
                Please Login
            </div>
        )
    }
    return <div>Welcome {user.username}</div>
}

export default Profile
