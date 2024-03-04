import { useState } from "react"


 const UseStateEx2=()=>{
    const [timer,SetTimer]=useState(0)

const handleTimer=()=>{
    setInterval(()=>{
   SetTimer(timer=>timer+1)
    },1000)
}
const handleTimer2=()=>{
  
   SetTimer(timer=>timer)
    
}


    return(
<>
<h2> CurrentTimer{timer}</h2>
<button onClick={handleTimer}>Click to Start</button>
<button onClick={handleTimer2}>Click to Stop</button>


</>
    )
 }
 export default UseStateEx2