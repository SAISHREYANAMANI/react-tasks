import { Component } from "react";
import axios from "axios"
import { RingLoader } from "react-spinners";
class Mounting extends Component{
     constructor(){
        console.log("constructor")
        super()
        this.state={
            products:[]
        }
     }

     componentDidMount(){
        console.log("component did mount")
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                this.setState({
                    products:response.data
                })
            }
            else{
                alert("something went wrong")
            }
        })
        .catch(err=>console.log(err))
     }

    render(){
        console.log(this.state.products,"renderMethod")
        return(
            <>
            <h1>ProductList</h1>
            {
                this.state.products.length>0?
                this.state.products.map(eachobj=><h1 key={eachobj.id}>{eachobj.title}</h1>)
                :
               <RingLoader/>
            }
            </>
        )
    }
    }
export default Mounting