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


// depndency array :
// based on the depencey array , useEffect will go for different life cyles 

// 1. remove the array ---> useEffect re-renders for every state or prop changes 


// 2. empty array --> useEffect will act like a component did mount 
// 3. array with state or prop values --> useEffect will act like a component did update 
// 4. if callback returns the function we can prevent memory leaks ----> useEffect will act like a component 
// willUnmount 