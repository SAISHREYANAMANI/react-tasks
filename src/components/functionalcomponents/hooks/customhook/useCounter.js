import React, { useState } from 'react'

function useCounter(initial=0) {
    const[count,setCount]=useState(initial)
    const handleCount=(value)=>{
        setCount(count+value)
    }
  return [count,handleCount]
}

export default useCounter