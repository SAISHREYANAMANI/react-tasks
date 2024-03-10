import React, { useState } from 'react'
import ComponentB from './componentB'

function ComponentA() {
   const[name,setName]= useState("shreya")
  return (
    <div>
        <ComponentB name={name} />
        
        
        </div>
  )
}

export default ComponentA