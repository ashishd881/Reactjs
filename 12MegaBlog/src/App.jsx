import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'
function App() {
  // console.log(Process.env.REACT_APP_APPWRITE_URL) //this way is wrong in vite project thsi is correct only for createReact app project
  // console.log(import.meta.env.VITE_APPWRITE_URL)       //this is used with vite project if we get two outputs in console it means react is in strict mode so shen th ecode goes in producton there are no issues
  //we make loading state because when we fetch data from appwrite to do conditional rendering
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //jaise hi application load ho toh ek useEffect lo aur pucho ki userlogin hai ki nahi
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
        <Header/>
          <main>
            to<Outlet/> 
            {/* ye react router dom se aayega */}
          </main>
        <Footer/>
    </div>
  </div>): null
}

export default App
