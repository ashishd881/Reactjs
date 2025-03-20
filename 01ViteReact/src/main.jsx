import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// createRoot(document.getElementById('root'))
// .render(
  
//     <App />
  
// )

//App ek function hai toh usko hum yaha bhi bana sakte hai
// function MyApp(){
//   return (
//       <div>
//         <h1>Custom App!</h1>
//       </div>
//   )
// }

// createRoot(document.getElementById('root'))
// .render(            //isi page me jo MyApp function banaya hai use hum yaha use kar rahe hia and we can see the output after writing np run dev ,dev because package.json ke script  me dev hai
  
//     <MyApp /> 
//   )

// createRoot(document.getElementById('root'))
// .render(            ///isi page me jo MyApp function banaya hai use hum yaha use kar rahe hia and we can see the output after writing np run dev ,dev because package.json ke script  me dev hai
//                       // we can use the MyApp function also but this is a bad practise 
//  MyApp()              
// )      
//   


//Note that my app ke andar jo bhi likha hai wo at the end createElement jo customReact app me banaya tha uske form me parse hota hai aur tree wagera banti hai toh kyu na my app jisme jparse hot ahi usko hum yaha hi likh de ie createElement ko




// const reactElement = {
//   type:'a',             //a mtlb a tag ki bath ho rahi hai
//   props: {              //props object hota hai:
//           href: 'https://www.google.com/',
//           target:'_blank'
//   },
//   children :'click me to visit google'                 
// }

// createRoot(document.getElementById('root'))
// .render(            
//     <reactElement />      //par ye chalega nahi because humne createElement ko function nahi banaya hai MyApp toh ek function tha aur toh aur reactElement hum ne banaya hai toh usko syntax bhi galat hai
// )

// doing above thing by another method

// const anotherElement =(
//   <a href="https://www.google.com/" target='_blank'>Visit Google</a>
// )


// createRoot(document.getElementById('root')).render(anotherElement)     //visit google show ho jayega


//ab hum react ke hisab se reactElement banayenge taki syntax error nahi aaye jo ki uapr aayi thi

// const reactElement = React.createElement(                 //babel jo ki transcompiler hai react ka wo ise inject karta hai
//   'a',
//   {href:'https://www.google.com/', target: '_blank'},
//   "click me to visit google"
// )

// createRoot(document.getElementById('root')).render(
//     reactElement                          //upar ye imp0rt import React from 'react' nahi kiya tha so ye code nahi chal raha tha 
// )
    

//App.jsx me jop variable banaya hai const username toh usko browser me dekhne ke liye ye kiya hai

// createRoot(document.getElementById('root'))
// .render(
  
//     <App />
  
// )


// par agar variable creation ko humko isi page me karna hai tohsee belo code 

const anotherUser = "chai aur react"
const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com/', target: '_blank'},
  "click me to visit google",
  anotherUser           //another user ko yaha call kar diya aur output me chai aur react bhi dikhega aur yaha pe hum if else nahi likh skte because yaha evaluated expression likhenge
)

createRoot(document.getElementById('root')).render(
    reactElement                          
)