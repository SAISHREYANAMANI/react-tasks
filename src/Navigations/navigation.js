import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostRoutes from "./post-routes/post-routes"
import PreRoutes from "./pre-routes/pre-route"



const Navigation=()=>{


    return(
        <BrowserRouter>
   {
    true?
    <PostRoutes/>
    :
    <PreRoutes/>
   }

        </BrowserRouter>
    )
}
export default Navigation