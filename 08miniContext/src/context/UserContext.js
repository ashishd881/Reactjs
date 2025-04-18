import React from "react";

const UserContext = React.createContext()           //createContext is a function context api ke liye banaya gaya hai

export default UserContext;              //UserContext ek provider ki tarah kam karega mtlb uske andar ke components ko global UserContext ka access mil jayega 


//ye provider hai isme hum provider lagayenge
// everything like login ,card,data will be wrapped by this UserContext and it will become a provider and all inside components wiil get access to all the states with this global UserContext
