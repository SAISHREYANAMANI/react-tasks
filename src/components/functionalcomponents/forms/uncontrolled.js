import { useRef } from "react"

const Uncontrolled=()=>{
   const usernameRef=useRef(null)
    const passwordRef=useRef(null)

    const handleSubmit=(event)=>{
        event.preventDefault() 
       
        const username=usernameRef.current.value
         const password=passwordRef.current.value
 
        // console.log("username" ,usernameRef.current.value)
        // console.log("password", passwordRef.current.value)
       

        if(username.length>5){
            alert("enter less than 5 charcters")
        }
        if(password!=Number(password) && password.length>4){
            alert("password must be  in numbers")
        }

        window.localStorage.setItem("username", username);
        // window.localStorage.setItem("password", password);
    }
 

    return(
        <>
        <h1>Uncontrolled Component example</h1>
       <form onSubmit={handleSubmit}>

       <input type="text" name="username" ref={usernameRef}/>
       <input type="password" password="password" ref={passwordRef}/>
       <input type="submit"/>
       </form>
        </>

    )

}
export default  Uncontrolled