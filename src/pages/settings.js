import { useContext } from "react"
import { UserDetail } from "../Navigations/navigation"
import Header from "../components/functionalcomponents/navbars/Navigation"

const SettingScreen=()=>{
  const userInfo=  useContext(UserDetail)
    return(
<>
<Header/>
<h2>Setting screen</h2>
<h3>{userInfo.username}</h3>
</>
    )
}
export default SettingScreen