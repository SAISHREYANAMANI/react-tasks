import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/Home"
import SettingScreen from "../pages/settings"
import ProfileScreen from "../pages/profile"
import InvalidScreen from "../pages/invalidscreen"
import AboutScreen from "../pages/about"
import PostRoutes from "./post-routes/post-routes"
import PreRoutes from "./pre-routes/pre-route"



const Navigation=()=>{


    return(
        <BrowserRouter>
   {
    false?
    <PostRoutes/>
    :
    <PreRoutes/>
   }

        </BrowserRouter>
    )
}
export default Navigation