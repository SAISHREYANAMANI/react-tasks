import {  useNavigate } from "react-router-dom"


const InvalidScreen=()=>{
    const navigate=useNavigate()
    const handleRoute=()=>{
       navigate("/")
    }
    return(
<>
<h2>  404 ERROR</h2>
<button onClick={handleRoute}>Go to home</button>
</>
    )
}
export default InvalidScreen