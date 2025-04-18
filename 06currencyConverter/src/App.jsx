import { useState } from 'react'
import {InputBox} from "./components"
//index file ko import karne ki zarurat nahi hai wo by default call hoti hai
import useCurrecncyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount] =useState(null)
  const [from,setFrom] =useState("usd")
  const [to,setTo] =useState("usd")
  const [convertedAmount ,setConvertedAmount] = useState()
  const currrecncyInfo = useCurrecncyInfo(from)          //ye hum custom hook ka use kar rahe hai
  const options = Object.keys(currrecncyInfo)//saari keys object ke nikal ke options me rakh li because api me sab object ke form me hai
  const swap =() =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =() =>{
    setConvertedAmount(amount * currrecncyInfo[to])

  }
  
    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://tse4.mm.bing.net/th?id=OIP.JjD8llZnX31alcac4BWAAAHaEo&pid=Api&P=0&h=180')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                        //   convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount ={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)}
                              className='bg-amber-600'
                    

                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount ={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  
  )
}

export default App
