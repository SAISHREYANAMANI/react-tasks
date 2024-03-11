import { useMemo, useState } from "react"


const UseMemoex1=()=>{
    const[counter1,setCount1]=useState(1)
    const[counter2,setCount2]=useState(1)
    const handleIncrementCount1=()=>{
        setCount1(counter1+1)
    }
    const handleIncrementCount2=()=>{
        setCount2(counter2+1)
    }
    //  const eventChecker=()=>{
    // console.log("event checker")
    //     return counter1%2===0 ? "EVEN": "ODD"
    // }
    const eventChecker= useMemo(()=>{
        console.log("event checker")
        return counter1%2===0 ? "EVEN": "ODD"
        
    },[counter1])

    return(   
        <>
        <h3>{counter1} counter 1</h3>
        <h3>{counter2} counter 2</h3>
        <h3>{eventChecker}</h3>

        <button onClick={handleIncrementCount1}>Click to increment count1</button>
        <button onClick={handleIncrementCount2}>Click to increment count2</button>
        </>
    )
}
export default UseMemoex1