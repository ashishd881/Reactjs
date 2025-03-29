import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/Github/github.jsx'


// const router=createBrowserRouter([       //router ke andar array bana di
//   {
//     //path top level element hai aur uske andar nesting ho rahi hai jis file ke elements ko render karna hai usko isme de do
//     path:'/',
//     element:<Layout/>,     // Layout.jsx jo file hai
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
    
//     ]
//   }
// ])


// Method 2 of above
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
            loader={githubInfoLoader}
            path="github" 
            element={<Github/>}/>





    </Route>
  )
  //jo kaam hum ne github wali file pe kiya fo'lowers pane ke liye wo kaam hum yahaa loader me kar skate hai
  // hum router ke andar router ko bhi call kar sakte hai 
)

createRoot(document.getElementById('root')).render(
  //routerProvider need a props let it be router but abhi hum ne router nahi banay 
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
