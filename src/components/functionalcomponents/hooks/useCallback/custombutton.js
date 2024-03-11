


import React from 'react'

function Custombutton({children,onClick}) {
    console.log(children)
  return (
    <>
    <button onClick={onClick}>{children}</button>
    </>
  )
}

export default React.memo(Custombutton)