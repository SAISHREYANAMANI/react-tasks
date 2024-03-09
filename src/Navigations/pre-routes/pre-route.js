import { Route, Routes } from "react-router-dom"

import LoginScreen from "../../pages/login"
import InvalidScreen from "../../pages/invalidscreen"
import Registration from "../../pages/registration"


const PreRoutes=()=>{
    return(
        <Routes>
        <Route path="/" Component={Registration}/>
        <Route path="/Login" Component={LoginScreen}/>
        <Route path="*" Component={InvalidScreen}/>
    </Routes>
    )
}
export default PreRoutes