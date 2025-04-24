import {configureStore} from "@reduxjs/toolkit"     //core redux se aaya hai ye store banane ke liye
//jo reducers banaye hai unko import kar do features wale folder se
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer                 //this is keyvalue and property we may have multiple of them
})