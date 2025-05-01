import React,{useId} from 'react'

function Select({options,label,className="",...props},ref) {
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select {...props} id={id} ref ={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {/* {iptions ek array hai ho sakta hai options ke andar value hi na hi options ko optionally loop kar do} */}
            {options?.map((option) =>(<option key={option} value={option}>
                        {option}
            </option>))}
        
        </select>
    </div>
  )
}

export default React.forwardRef(Select)           //forward ref ka use asue bhi kar skate hai
