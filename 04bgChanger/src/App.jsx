import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return ( // we are using className for css because class is a reserved keyword
    <>
      <div className="w-full h-screen duration-200"
          style={{backgroundColor: color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
              <div className='flex flex-wrap justify-center bottom-1
                gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                  <button 
                      onClick={() => setColor("red")}  
                      //onClick me hume ek function pass karna hai aur usme arguments bhi ho isiliye humne callback pass kiya hai on click me   set color background color ko fix kar dega              
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"Red"}}> Red
                  </button> 
                  <button 
                    onClick={() => setColor("yellow")}
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"yellow"}}> Yellow
                  </button> 
                  <button 
                    onClick={() => setColor("Green")}
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"green"}}> Green
                  </button> 
                  <button 
                    onClick={() => setColor("Blue")}
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"blue"}}> Blue
                  </button> 
                  <button 
                    onClick={() => setColor("Pink")}
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"pink"}}> Pink
                  </button> 
                  <button 
                    onClick={() => setColor("Purple")}
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"Purple"}}> Purple
                  </button> 
                  <button 
                    onClick={() => setColor("aqua")}
                    
                    className='outline-none px-4 py-1 
                    rounded-full text-white shadow-lg'
                    style={{backgroundColor:"Aqua"}}> Aqua
                  </button> 
              </div>
      </div>
      </div>
    </>
  )
}

export default App
