import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  



  //isme .provider na akar ke hum ne main.jsx dile me  kiya hai aur is baaar providerr react-redux se aayega
  return (
    <>
      <h1>Learn Reaact and ReduxToolKit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
