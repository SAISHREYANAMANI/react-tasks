import { useEffect } from "react"

const UseEffect5 =()=>{
     useEffect(()=>{
      window.addEventListener("mousemove",callbackFunction)

     },[])

     const callbackFunction=(event)=>{
        console.log(event.clientX)
        console.log(event.clientY)
     }

    return(
        <>
        <h2>hello</h2>
        
        
        </>
    )
}

export default UseEffect5

