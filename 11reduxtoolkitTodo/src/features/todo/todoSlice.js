import {createSlice,nanoid} from  "@reduxjs/toolkit" ///slice bana kiya hum ne and nanoid unique id banata hai

const initialState ={     //ye batata hi store shru me kaisa dikhta hai
    todos: [{id:1,text:"hello world"}]
}

//slice is a bigger version of reducer and reducer is a function

export const todoSlice = createSlice({
    //slice bnane ke liye niche di gayi 3 cheeze lagegi
    name:'todo',            //property ka naam name hi rakhte hai
    initialState,            //initial state de diya
    reducers : {             //reducers ek object hai jiske andar properties and function aayenge
        addTodo: (state,action) => {   //addTodo me 2 cheezo ka access rahega  state initial state ki situation ke baar me batata hai action methods ko call krne ke values deta hai jaise id wagera
            const todo = {
                id: nanoid(),
                text:action.payload        //text action ke payload se aayega payload ek object hai aur usme hum dot laga ke baki values ko access kar skate hai
            }
            state.todos.push(todo)      //initialState ke andar jo object hai wo hamara state ahi todo array banaya hai isiliye push kiya hai object hota toh property ka use karte
        },                                  //context api me hum bas function banate they define nahi karte they yaha  hum define bhi karenge addTodo karne se hume state aur action milta hai state initialState ki values ka access degi aur action , action ke andar payload hai jo ki ek object hai
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !==action.payload)   //hamre todo ki id action ke payload me jo id hai use se compare kar lega payload.id likhne ki zarurat nahi hai
        },
        //write update and delete todo also here
        updateTodo:(state,action) =>{
            state.todos = state.todos.map(filter((todo)=> (todo.id==action.payload) ? (todo.text=action.payload) : todo))          //payload ko compar karte wakt pata chal jata hai ki kon si value nikalni hai compare karne ke liye
 
        },
        // toggleTodo:(state,action)=>{
        //     state.todos=
             
        // }
    }
})

//har functionlaity ko export kana hoga because hum onhi functionalities ke through state ko updat3e karenge 

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

//reducers ko bhi export kana hoga
export default todoSlice.reducer