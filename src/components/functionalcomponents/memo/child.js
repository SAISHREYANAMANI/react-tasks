import React from 'react'

function ChildMemo() {
    console.log("child memo rendering")
  return (
    <div>child memo</div>
    
  )
}

export default  React.memo(ChildMemo)