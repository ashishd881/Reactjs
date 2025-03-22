import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)        // isko hook bhi bolte hai ye usestate 2 cheez return karta hai 0th aur 1st index of array pe 0th index pe counter dega aur 1st index pe setCounter function dega naam kuch bhi ho sakta hai in indexes ka
//jaha jaha counter likha hoga wo update ho jayegaa
//is se uI aur browser ke dom me sink bathaya gaya hai aur jaha jaha upkdate karna hoga wo update ho jayega

  const addValue = () =>{
    // console.log("Cliked",Math.random());
    // console.log("Cliked",counter);             //counter ki value jo screen pe likhi hai wo tho update nahi ho rahi hai par counter update ho raha hai console me screen ki value ko update karne ke liye we use usestate to change Ui because Ui react ke hath me hai
    // counter =counter+1;                     //is se kaam nahi chalega set counterfunction ko call krna hoga
    
    // if(counter<20)
    // {
    //   setCounter(counter+1)               //this is wrong because counter wahi pe stop ho jayega  usko 15 pe set karna hoga
    //    setCounter(counter+1
          // setCounter(counter+1)
          // setCounter(counter+1)
    // }
    //agar hum setCounter(counter+1) ko 4 baar likhe ge toh bhi output 15 ke baad 16 hi hoga because 4 charo ek batch me jayenge aur 16  hi output hoga
    
    //set counter ek callbacck accept karta hai like setCounter(() =>{}) curly braces ka use karenge toh return statement ka use karna hoga
    //setCounter((prevcounter)=>{return prevcounter+1}) retutn statement ka use kar ke
    // setCounter((prevcounter)=>prevcounter+1)
    // setCounter((prevcounter)=>prevcounter+1)
    // setCounter((prevcounter)=>prevcounter+1)
    // setCounter((prevcounter)=>prevcounter+1)
    // //prevCounter se hum ne previous state pass kiya hai isliye yah sidhe 4 plus ho jayega counter value me
    setCounter(previousCounter => (previousCounter >= 20 ?15:previousCounter+1))


  }
  const removeValue = () =>{
    
    // if(counter>0)
    // {
    //   setCounter(counter-1)
    // }

    setCounter(previousCounter => (previousCounter <= 0 ?15:previousCounter-1))




  }

  // let counter = 5      //yaha pe hu jo value dalenge wo run toh ho hi rahi hai kya zarurat hai hooks ki
  return (
    <>
        <h1>Chai aur React</h1>
        <h2>Counter Value {counter}</h2>
        <button 
              onClick={addValue}
        >Add Value</button>
        <br/>
        <button
          onClick={removeValue}
        >Remove Value</button>
    </>
  )
}

export default App
