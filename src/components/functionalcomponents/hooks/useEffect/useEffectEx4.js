import { useEffect, useState } from "react"

const UseEffect5 =()=>{

    const[x,setX]=useState(null)
    const[y,setY]=useState(null)
     useEffect(()=>{
      window.addEventListener("mousemove",callbackFunction)

      return()=>{
         window.removeEventListener("mousemove",callbackFunction)
      }

     },[])

     const callbackFunction=(event)=>{
       
        setX(event.clientX)
        setY(event.clientY)
        console.log(event.clientX)
        console.log(event.clientY)
       
     }

    return(
        <>
        <h2>hello</h2>
        <h3>X position {x}</h3>
        <h3>Y position {y}</h3>
        
        
        </>
    )
}

export default UseEffect5