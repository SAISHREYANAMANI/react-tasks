import {component} from "react"
import data from "../../components/functionalcomponents/jsx/apidata"
class ProductList extends component{
    constructor(){
        super()
        this.state={
            data
        }
    }
    sortFunction=(data,parameter)=>{
        let result=this.state.products.sort((a,b)=>a["price"]-b["price"])
        console.log(result)
        this.setState({
            products:result
        })
        }


    render(){
        return(

          <div>
         <button onClick={this.sortFunction}> sort by price</button>
          { this.state.data.map((eachobj)=>{
            return(
                <div>
                <ProductListing  datas={eachobj}/>
                </div>
            )

          })}
          </div>
        )
    }
}
export default ProductList


class ProductListing extends component{
    render(){
        return(
            <div>

                <h3>{this.props.title}</h3>
                <h3>{this.props.price}</h3>
            </div>

                    )
    }
}