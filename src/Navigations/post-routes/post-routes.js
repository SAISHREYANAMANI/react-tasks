import { Route, Routes } from "react-router-dom"
import HomeScreen from "../../pages/Home"
import SettingScreen from"../../pages/settings"
import AboutScreen from "../../pages/about"
import ProfileScreen from "../../pages/profile"
import InvalidScreen from "../../pages/invalidscreen"
import ProductDetail from "../../pages/productdetail"

const PostRoutes=()=>{
    return(
<Routes>
<Route path="/" Component={HomeScreen}/>
<Route path="/About" Component={AboutScreen}/>
<Route path="/setting" Component={SettingScreen}/>
<Route path="/Profile" Component={ProfileScreen}/>
<Route path="*" Component={InvalidScreen}/>
<Route path="/:category/:id"  Component={ProductDetail} />

</Routes> )
}
export default PostRoutes