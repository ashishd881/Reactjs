import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
// import 'tailwindcss'  isko app.css mei import karna hai

function App() {
  // const [count, setCount] = useState(0)
  // let myObj={

  // }
  // let newArr =[1,2,3]

  return (
    //jsx ki property hoti hai ki isme closing tags bhi hoine chaiye jaise <img/> kar ke usko closing bana do image tag toh closing hota hi nahi hai
    //yaha pe hum ne jo div banaya hai uska hum ek card bana lenge components/Card me aur usme aur usme values pass karenege toh uska ek card banake taiyr ho jayega usi ke liyew upar import likh ahai
    //card ke andar humko jo pass karna hai usko hum paass bhu kar sakte hai as shown for this we have to make variable upar ans pass them here <Card channel="chaiaurcode" someObje={myObj} someArr={newArr}/>
    <>
      <h1 className="bg-green-500 text-white p-4 rounded-2xl">Tailwind ttest</h1>
       <Card username="chaiaurcode" btnText="button ka text"/>
       <Card/>

    </>
  )
}

export default App
