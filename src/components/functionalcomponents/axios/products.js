
import axios from "axios"

const ProductsApi=()=>{
    const fetchData= async ()=>{
        // hit the server using axios
//       axios.get("https://fakestoreapi.com/products")
//       .then(response=> console.log(response))
//       .catch(err=>console.log(err))


// hitting using async await in axios
//       let result=await axios.get("https://fakestoreapi.com/products")
// console.log(result)


//  hitting using async await in fetch
  let response1= await fetch("https://fakestoreapi.com/products")
   let final= await response1.json()
   console.log(final)


// hit the server using fetch
    // fetch("https://fakestoreapi.com/products")
    // .then(response=> response.json()).then(response=>console.log(response))
    // .catch(err=>console.log(err))

    }

   return(
   <> 
     <button onClick={fetchData}> Fetch Data</button>
   </>
   )

}
export default ProductsApi