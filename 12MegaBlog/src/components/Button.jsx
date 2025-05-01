import React from 'react'

function Button({children,type='button',bgColor='bg-blue-600',
    textColor= 'text-white',className= ',...props'
}) {  //argumetn me hum ne default values di hai agar koi values deta hai toh hum overwrite karenge
    
    
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${className} {...props}`}>
        {children}
    </button>
  )
}

export default Button
