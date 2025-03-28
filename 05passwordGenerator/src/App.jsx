import { useCallback, useState, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] =useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // const passwordGenerator = useCallback(() => {},[length,numberAllowed,charAllowed.setPassword])           //function pass hoga aur dependencies array ke formate me use callback se hum ne cache ke andar rakh liya hai read doc
  const passwordGenerator = useCallback(() => {
    let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed)
    {
      str +="0123456789"
    }
    if(charAllowed)
    {
      str += "!@#$%^&*()_-+=[]{}`~"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      // console.log(char)
      pass += str.charAt(char)
    }
    setPassword(pass)

    },[length, numberAllowed, charAllowed, setPassword])    //yaha pe agar password diya toh infinite loop me hum fas jayenge       aur in cheezo me se kuch bhi change ho aur passwordGenerator run ho toh usko hum optimise karte hai
  
//hum chate hai ki jab bhi hamara page load ho ek password hamesha generate rahe toh uske liye hum passwordGenerator ko call kar ke chod dete hai but 
//se cant do this because react me hum kab kon si cheez render hogi hum nahi control karenge use liye hum useeffect hook ka use karenge  ya phir ek button laga ake call karle
  

const copyPasswordToClipboard = useCallback(() =>{
  passwordRef.current?.select()                                    //ye  likhte hi jaise hi password copy hoga wo select ho jayega
  passwordRef.current?.setSelectionRange(0,100);                     //jitna select karna hai ye uske bare  me hai
  window.navigator.clipboard.writeText(password)                //window ka use hum yaha kar sakte hai because react kisi browser me chalegi aur browser ke pass window object hoga par jab 
                                                              //hum nextjs padhenge toh usme server side rendering hoti hai aur server ke pass window obbect nahi hota hai
},[password])   //setpassword pe dependent hai toh useCallBack() ko call kar liya optimize karne ke liye


 useEffect(() => {
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])         //useeffect ke argument hai cleanup aur dependecncy array mtlb kis kis jagha click karenge toh password generator ko calll karn ahoga un me se kahi bhi click hoga toh password generator call ho jayega


//useRef hook ka use hum reference ko copy karne ke liye karte hai
const passwordRef =useRef(null)    //default value null de di hai
return (
  <>
      
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
        px-6 my-6 text-orange-500 bg-gray-600 '>
          <h1 className='text-3xl text-center text-white my-3' >Password Generator
          </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white '>
              <input type="text" value={password}
                  className='outline-none w-full py-1 px-3 '
                  placeholder='password'
                  readOnly
                  ref={passwordRef}            //passaword ko copy karne ke liye ye banaya  gaya hai
              ></input>
              <button 
                  //password copy karne ke liye clipboard ka use hua hai
                  onClick={copyPasswordToClipboard}
                  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
                      >Copy
              </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex text-sm gap-x-1'>
              <input type="range" min={6} max={100} value={length} 
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                ></input>
                <label>Length :{length}
                </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed}
                id='numberInput' onChange={() => {
                setNumberAllowed((prev) => !prev);     //true aur false flip hota rahega
               }}>
              </input>
              <label htmlFor='numberInput'>Numbers
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
                  <input type="checkbox" defaultChecked={charAllowed}
                          id="characterInput" onChange={() =>{
                            setCharAllowed(prev => !prev);
                          }}
                        >
                  </input>
                  <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
    </div>
  </>
)}

export default App
