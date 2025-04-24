import { createContext,useContext } from "react";

export const TodoContext = createContext({ 
    // ek array bana liya har ke todo ek object hai
    todos: [
        {
            id:1,
            todo : "todo msg",
            completed : false,
        }
    ],
    addTodo: (todo) => {},         //yaha function sirf define kar rahe ahi inki functionality hum app. jsx me likhenge when we use redux we will write the functionality
    updatedTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}       
})
export const useTodo =() => {       //usetodo ke pass jo tudo context banaya hai uska puta data hai
    return useContext(TodoContext)
}

export const TodoProvider =TodoContext.Provider   //TodoContext.provider na likhna pade so we use  this line