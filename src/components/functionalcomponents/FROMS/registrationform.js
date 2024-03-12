
import { useState } from "react"
import "./formstyles.css"
const Registration=()=>{
   const[username,setusername]=useState("")
    const [userMail,setuserMail]=useState("")
     const [password,setpassword]=useState("")
     const [password1,setpassword1]=useState("")
     const [phonenumber,setphoneNumber]=useState("")
     const[usernameError, setUsernameError]=useState(null)
     const[userMailError, setUserMailError]=useState(null)
     const[passwordError, setpasswordError]=useState(null)
     const[passwordError1, setpasswordError1]=useState(null)
     const[phoneNumberError, setphoneNumberError]=useState(null)
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

    const userMailHandler=(event)=>{
        // console.log(event.target.value)
        let userMailInput=event.target.value
       setuserMail(userMailInput)
       if(userMailInput.match(/^\S+@\S+\.\S+\S+\S+\S$/)){
        // alert("please enter less than 5 characters")
        showMailError()
       }
       else{
        setUserMailError(null)
       }

    }
   const  showMailError=()=>{
    setUserMailError("email must contain @.com")
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

   const passwordHandler1=(event)=>{
    let passwordInput1=event.target.value
    setpassword1(passwordInput1)
    if(passwordInput1!== password){
      showpasswordError1()
    }
    else{
      setpasswordError1(null)
    }

   }
   const showpasswordError1=()=>{
    setpasswordError1("password must match the previous")
   }

   const phoneNumberHandler=(event)=>{
    let phoneNumberInput=event.target.value
    setphoneNumber(phoneNumberInput)
    // const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const phoneregx = /^[6-9]\d{9}$/ ;
  if(!phoneregx.test(phoneNumberInput)){
        showphoneNumberError();
      } else {
        setphoneNumberError(null);
      }

   }
   const showphoneNumberError=()=>{
    setphoneNumberError("phone number must contain only 10 digits")
   }
 


    return(
        <>
        <div className="divstyle">
      <form action="/action_page.php">
      <h2 style={{fontFamily:"cursive"}}> REGISTRATION FORM</h2>
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
       value={userMail}
       onChange={userMailHandler}
       style={{border:userMailError?"2px solid red":"0"}}
    />
    {
      userMailError?<span style={{color:"red"}}>{userMailError}</span>:null
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

  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Confirm Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
    value={password1}
     onChange={passwordHandler1}
     style={{border:passwordError1?"2px solid red":"0"}}
    />
     {
       passwordError1?<span style={{color:"red"}}>{passwordError1}</span>:null
    }
  </div>

  <div className="mb-3">
    <label htmlFor="phonenumber" className="form-label">
      Phone Number:
    </label>
    <input
      type="tel"
      className="form-control"
      id="phonenumber"
      placeholder="Enter Phone Number"
      name="phonenumber"
     value={phonenumber}
     onChange={phoneNumberHandler}
     style={{border:phoneNumberError?"2px solid red":"0"}}
    />
     {
      phoneNumberError?<span style={{color:"red"}}>{phoneNumberError}</span>:null
    }
  </div>

  <div>
  <p>Choose your favorite Web language:</p>
  &nbsp;{" "}
     <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
   &nbsp;{" "}
  <label htmlFor="html">HTML</label>
  <br />
  &nbsp;{" "}
 <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
  &nbsp; <label htmlFor="css">CSS</label>
  <br />
  &nbsp;{" "}
  <input
    type="radio"
    id="javascript"
    name="fav_language"
    defaultValue="JavaScript"
  />
  &nbsp; <label htmlFor="javascript">JavaScript</label>
  <br />
  &nbsp;{" "}
 <input type="radio" id="react" name="fav_language" defaultValue="REACT.JS" />
  &nbsp; <label htmlFor="react">REACT.JS</label>
  </div>
<div>
<label htmlFor="gender">Choose a gender:</label>
  <select name="gender" id="gender">
    <option value="male">Male</option>
    <option value="Female">Female</option>
    <option value="Prefer not to say">prefer not to say</option>
    <option value="Others">Others</option>
  </select>
</div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>

        </>
    )
}
export default Registration