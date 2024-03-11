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


// Tasks :

// 1. Repeat the class
// 2. based on the count value , show th corresponding product in the ui 
// 3. prepare the react topics till now 