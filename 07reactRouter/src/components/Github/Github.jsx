import  { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'  //ye niche async await ke liye kiya gaya hai
function Github() {

    const data =useLoaderData()                  //ye niche async await ke liye kiya gaya hai

    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ashishd881')
    //     .then(response =>response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
    Github Followers:{data.followers}
    <img src='data.avatar_url alt="picture" width={300}' />
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =await fetch('https://api.github.com/users/ashishd881')
    return response.json()
}