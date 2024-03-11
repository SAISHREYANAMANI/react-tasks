import { useEffect, useState } from "react"
const UseEffectExample=()=>{
    const[counter,setCounter]=useState(0)
    const[counter1,setCounter1]=useState(10)
    useEffect(()=>{
        console.log("useEffect")
    },[counter,counter1])

    const handleIncrement =()=>{
        setCounter(counter+1)
    }
    const handleIncrement2 =()=>{
        setCounter1(counter1+1)
    }
    return(
        <>     
        <h1>Counter {counter}</h1>
        <button onClick={handleIncrement} >Increment</button>


        <h1>Counter  {counter1}</h1>
    
        <button onClick={handleIncrement2} >Increment counter 2</button>
        </>
    )
}
export default UseEffectExample