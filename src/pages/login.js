
import { useState } from "react"
import { Link } from "react-router-dom"
import "./loginstyle.css"
const LoginScreen=()=>{

   const[username,setusername]=useState("")
   const[usernameError, setUsernameError]=useState(null)
   const [password,setpassword]=useState("")
   const[passwordError, setpasswordError]=useState(null)
   const usernameHandler=(event)=>{
      let usernameInput=event.target.value
      setusername(usernameInput)
      if(usernameInput.length>5){
        // alert("please enter less than 5 characters")
        showError()
       }
       else{
        setUsernameError(null)
       }
       
    }
    const  showError=()=>{
      setUsernameError("username must be less than 5 charcters")
     }
     const passwordHandler=(event)=>{
      let passwordInput=event.target.value
      setpassword(passwordInput)
      if(isNaN(passwordInput)){
        showpasswordError()
      }
      else{
        setpasswordError(null)
      }
  
     }
     const showpasswordError=()=>{
      setpasswordError("password must be numbers")
     }
   return(
      <>
{/* <h2> I am login scren</h2> */}
<div className="divstyle">
<form action="/action_page.php">
<h2 style={{fontFamily:"cursive"}}> LOGIN FORM</h2>
<div className="mb-3 mt-3">
    <label htmlFor="username" className="form-label">
      UserName:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter name"
      name="username"
       value={username}
       onChange={usernameHandler}
       style={{border:usernameError?"2px solid red":"0"}}
    />
    {
      usernameError?<span style={{color:"red"}}>{usernameError}</span>:null
    }
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
    value={password}
     onChange={passwordHandler}
     style={{border:passwordError?"2px solid red":"0"}}
    />
     {
       passwordError?<span style={{color:"red"}}>{passwordError}</span>:null
    }
  </div>
  <button type="submit" className="btn btn-primary">
    <Link className="Linkstyle" to={"./Home.js"}>
    Submit
    </Link>
   
  </button>



   </form>
   </div>
   </>
   ) 
}
export default LoginScreen