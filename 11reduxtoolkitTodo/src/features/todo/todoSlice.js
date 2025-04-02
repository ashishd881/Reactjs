import {createSlice,nanoid} from  "@reduxjs/toolkit" ///slice bana kiya hum ne and nanoid unique id banata hai

const initialState ={
    todos: [{id:1,text:"hello world"}]
}

//slice is a bigger version of reducer and reducer is a function

export const todoSlice = createSlice({
    name:'todo',            //property ka naam name hi rakhte hai
    initialState,
    reducers : {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },                                  //context api me hum bas function banate they define nahi karte they yaha  hum define bhi karenge addTodo karne se hume state aur action milta hai state initialState ki values ka access degi aur action , action ke andar payload hai jo ki ek object hai
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !==action.payload)
        }
    }

})