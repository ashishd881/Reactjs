import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{           //children is a generic name
    const [user,setUser] = React.useState(null)
    return(
        //provider ke andar props me likhenge ki kon si values ka access de rahe hai
        <>
            <UserContext.Provider value={{user,setUser}}>
                {children}                  {/*jo bhi aa raha usko asit is likha diya aur provider se wrap kar diya */}
                
            </UserContext.Provider>
            
        </>
    )
}

export default UserContextProvider