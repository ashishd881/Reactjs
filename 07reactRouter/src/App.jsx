import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//ye niche ke import apne app aa gaye hai jaise hi  retutn ke andar likha 
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)
  //ab hum tino component render kara lenge aur index file baana ke bhi kar skate hai par hum render app.jsx me nahi karenge kyunki hum ne npm i react-router ka use kar liya hai 
//   return (
//     <>
//       <Header/>
//       <Home/>
//       <Footer/>
//     </>
//   )
}

export default App



// npm install react-router-dom  isko karne se package.json me react-router-dom aa jayega
