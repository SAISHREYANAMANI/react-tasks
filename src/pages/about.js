import { useContext } from "react"
import ComponentA from "../components/functionalcomponents/context/componentA"
import Header from "../components/functionalcomponents/navbars/Navigation"
import { UserDetail } from "../Navigations/navigation"
import useAxios from "../components/functionalcomponents/hooks/customhook/useAxios"
import { Spinner } from "react-bootstrap"
import { BASE_PROD_URL, endPoints } from "../endpoints/endpoint"

const AboutScreen=()=>{
// const[data]=useAxios("https://fakestoreapi.com/products/categories")
const[data]=useAxios(`${BASE_PROD_URL}${endPoints.categories}`)
console.log(data)
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
{
    data.length>0 ?
    data.map(ele=><h2>{ele}</h2>):
    <Spinner/>
}

</>
    )
}
export default AboutScreen