// function hello(){
//     return []                  //this is s acustom hook returning array
// }

import { useEffect,useState } from "react";

//Ab hum custom hooks banayenge by default we start naming with use but it is not necessary
function useCurrecncyInfo(currency){   
    const [data, setData] =useState({})
    //is link me koi bhi currrency value dene se hume json data milta hai us currency ke repect me aur ye data string me hai toh usko json me convert karna hoga 
    useEffect( ()=> {fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/                        
        currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())               //json format me convert kar diya .json kar ke
        .then((res) => setData(res[currency]))
        console.log(data)
    },[currency])                  
}