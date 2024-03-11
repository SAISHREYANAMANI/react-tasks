import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from "../../spinner/spinner"






const UseEffectEx3=()=>{
    const[count,setCount]=useState(0)

    const [data,setData]=useState([])

    useEffect(() => {
     
         fetchData()
 
      },[]);

    const fetchData = async ()=>{


    const result =await axios.get("https://dummyjson.com/products")
      setData(result.data.products)

    }


    return(
        <>
        <h1>UseEffect</h1>
        <h4>{count}</h4>
        <button  onClick={()=>setCount(count+1)} >Count change</button>
        {
            data.length>0
            ?
            data.map(item=><h4>{item.title}</h4>)
            :
            <Spinner/>
        }
        </>
    )
}
export default UseEffectEx3

