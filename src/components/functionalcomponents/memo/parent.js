import React, { useState } from 'react'
import ChildMemo from './child'

function ParentMemo() {
      const[count,setCount]=useState(0)
  return (
    <>
<ChildMemo/>
<h2>{count}</h2>
<button onClick={()=>setCount(count+1)}>change counter</button>
    </>
  )
}
export default ParentMemo
