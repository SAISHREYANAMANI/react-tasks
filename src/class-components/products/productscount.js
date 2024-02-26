import {Component} from "react"
import data from "../../components/functionalcomponents/jsx/apidata"
class ProductList extends Component{
    constructor(){
        super()
        this.state={data}
        console.log(data)
    }
   
    sortFunction=(data,parameter)=>{
        let result=this.state.data.sort((a,b)=>a["price"]-b["price"])
        console.log(result)
        this.setState({
            products:result
        })
        }
       
      childToParent=(datas)=>{
       alert("child to parent")
      }
      increment=(datas)=>{
      console.log(datas,this.state.data)
      let result=this.state.data.map((eachobj)=>{
        if(eachobj.id===datas.id){
            let newObject={...eachobj,rating:{
                ...eachobj.rating,count:eachobj.rating.count+1
            }}
        return newObject

        }else{
            return eachobj
        }
      })
      console.log(result,"result logged")
        this.setState({data:result})

    // let result2=this.state.data.map(element=>{
    //     if(element.id===datas.id){
    //         return{...this.state.data,price:element.price*element.rating.count}
    //     }
    //     else{
    //         return element
    //     }
    // })
    //   this.setState({
    //     data:result2
    //   })

      }
      decrement=(datas)=>{
        console.log(datas,this.state.data)
        let result=this.state.data.map((eachobj)=>{
          if(eachobj.id===datas.id){
              let newObject={...eachobj,rating:{
                  ...eachobj.rating,count:eachobj.rating.count-1
              }}
          return newObject
  
          }else{
              return eachobj
          }
        })
        console.log(result,"result logged")
          this.setState({data:result})
      }
      reset=(datas)=>{
        let res=this.state.data.map((eachobj)=>{
            if(eachobj.id===datas.id){
                let newObj={...eachobj,rating:{
                    ...eachobj.rating,count:0
                }}
                return newObj

            }
            else{
                return eachobj
            }

        })
       this.setState({data:res})
      }
      Total=(datas)=>{
       let result=this.state.data.map((eachobj)=>{
        if(eachobj.id===datas.id){
            return{...eachobj,rating:{
                ...eachobj.rating,price:eachobj.rating.count*eachobj.price
            }}
           console.log(result) 
        }
        else{
            return eachobj
        }
       })
       console.log(result,"total")
       this.setState({
        data:result
       })
      }
    render(){
        return(

          <div>
         <button onClick={this.sortFunction}> sort by price</button>
          { this.state.data.map((eachobj)=>{
            return(
                <div key={eachobj.id}>
                <ProductListing  datas={eachobj} communication={this.childToParent} increment={this.increment} decrement={this.decrement}  reset={this.reset} Total={this.Total}/>
                </div>
            )

          })}
          </div>
        )
    }
}
export default ProductList


class ProductListing extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.datas.title}</h3>
                <h3>PRICE--{this.props.datas.price}</h3>
                <h3>COUNT--{this.props.datas.rating.count}</h3>
                <h3>TOTAL--{this.props.datas.price}</h3>
                <button onClick={()=>this.props.increment(this.props.datas)}>+</button>
                  {/* <h4>{this.props.datas.rating.count}</h4> */}
                <button onClick={()=>this.props.decrement(this.props.datas)}> - </button>
                <button onClick={()=>this.props.reset(this.props.datas)}>Reset</button>
                <button onClick={()=>this.props.Total(this.props.datas)}>Total</button>
            </div>
        )
    }
}