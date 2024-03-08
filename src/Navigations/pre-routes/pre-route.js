import { Route, Routes } from "react-router-dom"

import LoginScreen from "../../pages/login"
import InvalidScreen from "../../pages/invalidscreen"


const PreRoutes=()=>{
    return(
        <Routes>
        <Route path="/" Component={LoginScreen}/>
        <Route path="*" Component={InvalidScreen}/>
    </Routes>
    )
}
export default PreRoutes