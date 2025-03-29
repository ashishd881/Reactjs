// function hello(){
//     return []                  //this is s a custom hook returning array custum hooks can use built in arrays
// }

import {useEffect ,useState} from "react";

//Ab hum custom hooks banayenge by default we start naming with use but it is not necessary
function useCurrecncyInfo(currency){   
    const [data, setData] =useState({})        //use state me empty object de diya taki agar fetch kam na kare toh program crash na ho
    //is link me koi bhi currrency value dene se hume json data milta hai us currency ke repect me aur ye data string me hai toh usko json me convert karna hoga 
    useEffect( ()=> {fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)         //argument of useffect are callback and dependency array 
        .then((res) => res.json())               //json format me convert kar diya .json kar ke aur .then ki argument me callback diya hai curly braces ka use karenge toh return statement likhna hoga
        .then((res) => setData(res[currency]))   // .then me api se response aa gaya hai toh set data me response rakh do usestate bana ke taki ui me update ho sake agar variable bana ke rakhenge toh ui me updat nahi hoga
        console.log(data)
    },[currency])                  //dependency array me currency hai toh hum jab bhi currency me change karenge toh api call hogi
    console.log(data)
    return data;         //yaha se daate return kar diya
}
export default useCurrecncyInfo;          //pure method ko return kar diya usestate  me bhi asie hi hota hai