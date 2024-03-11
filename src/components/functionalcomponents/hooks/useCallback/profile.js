

import React, { useCallback, useState } from 'react'
import Custombutton from './custombutton'

function ProfileExample() {
    const[age,setAge]=useState(100)
    const[salary,setSalary]=useState(1000)

    const handleAge=useCallback(()=>{
        setAge(age+10)
    },[age])


    const handleSalary= useCallback(()=>{ setSalary(salary+1000)},[salary])
    // const handleSalary=()=>{
    //     setSalary(salary+1000)
    // }
  return (
   <>
   <h2>Salary{salary}</h2>
   <h2>Age{age}</h2>
   <Custombutton onClick={handleAge} >Age Increment</Custombutton>
   <Custombutton  onClick={handleSalary}>Salary Increment</Custombutton>
   </>
  )
}

export default ProfileExample