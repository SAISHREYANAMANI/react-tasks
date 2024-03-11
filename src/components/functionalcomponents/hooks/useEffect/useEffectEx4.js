import { useEffect, useState } from "react"

const UseEffect5 =()=>{

    const [x,setX]=useState(null)
    const [y,setY]=useState(null)

     useEffect(()=>{
      window.addEventListener("mousemove",callbackFunction)

      return ()=>{
        // clean the component by preventing memory leaks 
        window.removeEventListener("mousemove",callbackFunction)

      }

     },[])

     const callbackFunction=(event)=>{
        console.log(event.clientX)
        console.log(event.clientY)
        setX(event.clientX)
       setY(event.clientY)
     }

    return(
        <>
        <h2>hello</h2>
        <h1>X position {x}</h1>
        <h1>Y position {y}</h1>
        
        </>
    )
}

export default UseEffect5


// useEffect :
// 1.  component did mount 
// 2. component did update 
// component will mounr 


// Tasks :

// 1. Repeat the class
// 2. based on the count value , show th corresponding product in the ui 
// 3. prepare the react topics till now 