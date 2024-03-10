// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Spinner } from "react-bootstrap"
// import { useParams } from "react-router"



// const ProductDetail=()=>{
//   const RouteInfo=  useParams() 
//   const[product,setProduct]=useState({})

//   useEffect(()=>{
//     fetchData()
//   },[RouteInfo.id])

//   const fetchData=()=>{
//     axios.get(`https://fakestoreapi.com/products/${RouteInfo.id}`)
//     .then(response=>
//        {
//             if(response.data==200){
//                 setProduct(response.data)
//             }

//         })

//   }
//     return(
// <>
// <h2> I am Product detail screen</h2>
// {
//     Object.keys(product).length==0
//     ?
//     <>
//     <h1>{product.title}</h1>
   
//     <img src={product.image} style={{width:200,height:200}}/>
//     <h4 style={{color:"red"}}>{product.price}</h4>
//     <h2>{product.description}</h2>
//     </>:
//     <Spinner/>
// }
// </>
//     )
// }
// export default ProductDetail
import axios from "axios"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"


const ProductDetail =()=>{

    const routeInformation = useParams()
    console.log(routeInformation,"routeInformation")
    const[product,setProduct]=useState({})

    useEffect(()=>{
        //fetch the data related to the product
        fetchData()
       
    },[routeInformation.id])

    const fetchData =()=>{
        axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
        .then(response=>{
            if(response.status===200){
                setProduct(response.data)
            }
        })

    }
    
    return(
        <>

        {
            Object.keys(product).length>0
            ?
          <>
          <h1>{product.title}</h1>
    
          <img src={product.image} width={200} height={200} />
          <h4 style={{color:"red"}} >₹{product.price}</h4>
          <h2>{product.description}</h2>
          </>
            :
            <Spinner/>
        }

        </>
    )
}
export default ProductDetail