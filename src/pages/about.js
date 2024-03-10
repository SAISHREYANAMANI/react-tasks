import { useContext } from "react"
import ComponentA from "../components/functionalcomponents/context/componentA"
import Header from "../components/functionalcomponents/navbars/Navigation"
import { UserDetail } from "../Navigations/navigation"

const AboutScreen=()=>{

  let globalInfo=  useContext(UserDetail)
    console.log(globalInfo)

const changeName=()=>{
    globalInfo.changeName()
}

    return(
<>
<Header/>
<h2>About screen</h2>
<h3>I am from navigation,js, globalinfo {globalInfo.username} </h3>

<button onClick={changeName}>Change name</button>
<ComponentA/>
</>
    )
}
export default AboutScreen