import { useState } from "react"

const UseStateExample=()=>{
 const [CurrentState,setCurrentCount] = useState(0)

 const handleIncrement=(value)=>{
    // console.log(CurrentState,"CurrentState")
    setCurrentCount(i=>i+1)
    setCurrentCount(i=>i+1)
    setCurrentCount(i=>i+1)
    setCurrentCount(i=>i+1)
    // setCurrentCount(CurrentState+value)
 }
 const handleDecrement=(value)=>{
    setCurrentCount(CurrentState-value)

 }
 const handleReset=(value)=>{
    setCurrentCount(0)

 }
    return(
        <>
        <h2>{CurrentState}</h2>
        <button onClick={()=>handleIncrement(1)}>increment</button>
        <button onClick={()=>handleDecrement(1)}>decrement</button>
        <button onClick={handleReset}>Reset</button>    
        </>
    )
}
export default UseStateExample
// syntax of UseState
//  const [CurrentState,updaterfunction] = UseState()