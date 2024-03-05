import { useState } from "react"

const Controlled=()=>{
   const[username1,setusername1]=useState("")
    const [username,setusername]=useState("")
     const [password,setpassword]=useState("")
     const[usernameError1, setUsernameError1]=useState(null)
     const[usernameError, setUsernameError]=useState(null)
     const[passwordError, setpasswordError]=useState(null)

const usernameHandler1=(event)=>{
  let usernameInput1=event.target.value
  setusername1(usernameInput1)
  if(usernameInput1.length>5){
    // alert("please enter less than 5 characters")
    showError1()
   }
   else{
    setUsernameError1(null)
   }
}
const  showError1=()=>{
  setUsernameError1("username must be less than 5 charcters")
 }

    const usernameHandler=(event)=>{
        // console.log(event.target.value)
        let usernameInput=event.target.value
       setusername(usernameInput)
       if(usernameInput.match(/^\S+@\S+\.\S+\S+\S+\S$/)){
        // alert("please enter less than 5 characters")
        showError()
       }
       else{
        setUsernameError(null)
       }

    }
   const  showError=()=>{
    setUsernameError("email must contain @.com")
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
<form action="/action_page.php">
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
       value={username1}
       onChange={usernameHandler1}
       style={{border:usernameError1?"2px solid red":"0"}}
    />
    {
      usernameError1?<span style={{color:"red"}}>{usernameError1}</span>:null
    }
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
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
    Submit
  </button>
</form>

        </>
    )
}
export default Controlled