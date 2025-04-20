import { useState,useEffect } from 'react'
import { TodoProvider } from './contexts' 
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(todo)=> {
    setTodos((prev) => [{...todo,id:Date.now(), },...prev])   //unique id ke liye data.now() ka use kiya hai  prev se puranki arry mil gaya aur nayi array bna ke purani values bhi dal di aur nayi values bhi isliye spread liya
  }

  const updatedTodo =(id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id) ? todo :prevTodo ))  //har ke todo pe gaye aur argument me di gayi id se compare kiya 

    // prev.map((eachVal) =>{
    //   if(eachVal.id === id)
    //   {
    //     to
    //   }
    // }) 
  }

  const deleteTodo= (id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id!==id))   //filter ka use kar ke us todo ko hata diya jo hamare toki id se match kar gaya
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed}: prevTodo ))   //prevTodo ki saari values ko le liya aur completed ki value ko toggle kar diya
  }
 //useeffect se localstorage se values le ke todos me dal diys
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'))              //localstarage is used in browser side rendering w3school se padh lo localstorage string me deta hai data usko json me parse kar do taki wo apne original form me aa jaye
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))         //array ke form me hai toh usko string me convert kar diya taki localStorage me save kar sake
  },[todos]) 
  //dependency me todos dal diya because jaise hi todos banayenge toh wo localStorage me chala jayega

  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
    <>
      <div className="bg-[#172842] min-h-screen py-8 w-full">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>{
                          return(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                          )
                        })}
                    </div>
                </div>
            </div>
    </>
    </TodoProvider>
  )
}

export default App
