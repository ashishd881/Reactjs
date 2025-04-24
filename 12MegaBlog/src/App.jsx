import { useState } from 'react'
import './App.css'

function App() {
  // console.log(Process.env.REACT_APP_APPWRITE_URL) //this way is wrong in vite project thsi is correct only for createReact app project
  console.log(import.meta.env.VITE_APPWRITE_URL)       //this is used with vite project if we get two outputs in console it means react is in strict mode so shen th ecode goes in producton there are no issues

  return (
    <>
      <h1>a blog with appwrite</h1>
    </>
  )
}

export default App
