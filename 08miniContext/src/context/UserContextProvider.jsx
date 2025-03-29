import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = React.useState(null)
    return(
        //provider ke andar props me likhenge ki kon si values ka access de rahe hai
        <>
            <UserContext.Provider value={{user,setUser}}>
                {children}
                
            </UserContext.Provider>
            
        </>
    )
}

export default UserContextProvider