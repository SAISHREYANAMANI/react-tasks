import { useContext } from "react"
import { UserDetail } from "../Navigations/navigation"
import Header from "../components/functionalcomponents/navbars/Navigation"
import UseMemoex1 from "../components/functionalcomponents/hooks/useMemo/useMemoex1"
import ParentMemo from "../components/functionalcomponents/memo/parent"
import ProfileExample from "../components/functionalcomponents/hooks/useCallback/profile"
import UseEffect5 from "../components/functionalcomponents/hooks/useEffect/useEffectEx4.js"
import useCounter from "../components/functionalcomponents/hooks/customhook/useCounter.js"



const SettingScreen=()=>{
  const[count,setCount]=useCounter(10)
  const userInfo=  useContext(UserDetail)
    return(
<>
<Header/>
<h2>Setting screen</h2>
{/* <h3>{userInfo.username}</h3> */}
<h4>{count}</h4>
<button onClick={setCount}>COUNT INCREMENT</button>
{/* <UseMemoex1/> */}
{/* <ParentMemo/> */}
{/* <ProfileExample/> */}
{/* <UseEffect5/> */}

</>
    )
}
export default SettingScreen