import React,{useState,useContext} from 'react' //useContext 
import UserContext from '../context/UserContext'

function Login() {               //rfce
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)       //UserContext wali file se aaya hai ye is se hum user ko set kar rahe hai because isme logine hai aur profile se user ke date ko calll karenge so useme user ka use hua hai

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})          //username aur password bejh diya submit karne par
    }

  return (
    <div>
      <h2>Login </h2>
      <input type ='text '
             value={username}
             onChange={(e) => {
                setUsername(e.target.value)
             }}
             placeholder='username'/>
      <input type ='text'
            value={password}
             onChange={(e) => {
                setPassword(e.target.value)
             }} placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
