import { useEffect, useState } from "react"





const UseEffect4Example =()=>{
    const[count,setCount]=useState(0)

    useEffect(()=>{
        domManipulation()
        console.log("useEffect")
    },[count])

    const domManipulation =()=>{
        document.title=`Current count ${count}`
    }

    return(
        <>
        <h2>use effect</h2>
        <h3>Current count {count}</h3>
        <button onClick={()=>setCount(count+1)} >Increment</button>
        </>
    )
}

export default UseEffect4Example