import { useContext } from "react"
import { UserDetail } from "../Navigations/navigation"
import Header from "../components/functionalcomponents/navbars/Navigation"
import UseMemoex1 from "../components/functionalcomponents/hooks/useMemo/useMemoex1"
import ParentMemo from "../components/functionalcomponents/memo/parent"
import ProfileExample from "../components/functionalcomponents/hooks/useCallback/profile"

const SettingScreen=()=>{
  const userInfo=  useContext(UserDetail)
    return(
<>
<Header/>
<h2>Setting screen</h2>
<h3>{userInfo.username}</h3>
{/* <UseMemoex1/> */}
{/* <ParentMemo/> */}
<ProfileExample/>
</>
    )
}
export default SettingScreen