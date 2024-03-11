
import useCounter from "../components/functionalcomponents/hooks/customhook/useCounter"
import UseReducer from "../components/functionalcomponents/hooks/useReducer/usereducerEX1"
import Header from "../components/functionalcomponents/navbars/Navigation"


const ProfileScreen=()=>{
    const[c,setC]=useCounter(10)
    return(
<>
<Header/>
<h2>Profile screen</h2>

{/* <UseReducer/> */}
<h4>{c}</h4>
<button onClick={()=>{setC(20)}}>COUNT INCREMENT</button>
</>
    )
}
export default ProfileScreen