import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostRoutes from "./post-routes/post-routes"
import PreRoutes from "./pre-routes/pre-route"
import { useState } from "react"
import { createContext } from "react"


export const UserDetail=createContext()
const Navigation=()=>{
const[username,setUserName]=useState("shreya")
 const changeName=()=>{
    setUserName("SAI SHREYA")
 }
    return(
        <BrowserRouter>
        <UserDetail.Provider value={{
            username,
            changeName
        }}>
        
   {
    true?
    <PostRoutes/>
    :
    <PreRoutes/>
   }
    </UserDetail.Provider>
        </BrowserRouter>
    )
}
export default Navigation