import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    
    <div className='bg-gray-500 text-white text-3xl'>
      User:{userid}
    </div>
  )
}
//iske madat se url me hum jo bhi likhenege /user/1  or /user/hitesh wo sab print ho jayega screen pe 
export default User
