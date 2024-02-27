import {Component} from "react"
import data from "../../components/functionalcomponents/jsx/apidata"
import Table from "../../components/functionalcomponents/jsx/jsxtable"


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
                    ...eachobj.rating,count:1
                }}
                return newObj

            }
            else{
                return eachobj
            }

        })
       this.setState({data:res})
      }

      deleteProduct = (data) => {
    // Use filter to create a new array with all items except the one to be deleted
    let updatedData = this.state.data.filter((eachObj) => eachObj.id !== data.id);

    // Update the state with the new array
    this.setState({
        data: updatedData
    });
}

    render(){
        return(

          <div>
         <button onClick={this.sortFunction}> sort by price</button>
          { this.state.data.map((eachobj)=>{
            return(
                <div key={eachobj.id}>
                <ProductListing  datas={eachobj} communication={this.childToParent} increment={this.increment} decrement={this.decrement}  reset={this.reset} Total={this.Total} Delete={this.deleteProduct}/>

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
              
                
               <Table/>
               
               <tbody>
              {data.map((eachitem)=>{
             const{id,title,price,description,category,image,rating:{rate,count}} = eachitem;
              return(
           
              <tr>
                <td> <h4>{id}</h4></td>
                <td> <img src={image} width={150} height={150} alt=""/></td>
                <td> <h4>{title}</h4> </td>
                <td> <h4>{price}</h4> </td>
                <td> <h4>{count}</h4> </td>
                <td>
                    <h3>  {this.props.datas.price*this.props.datas.rating.count}</h3></td>
                <td> <h4><button onClick={()=>this.props.increment(this.props.datas)}>+</button></h4> </td>
                <td> <h4> <button onClick={()=>this.props.decrement(this.props.datas)}>-</button></h4> </td>
                <td> <h4><button onClick={()=>this.props.reset(this.props.datas)}>Reset</button></h4></td>
                <td><button onClick={() => this.props.Delete(this.props.datas)}>Delete</button> </td>
            </tr>
        )
    })}
</tbody>
                   
                <h3>{this.props.datas.title}</h3>
                <h3>PRICE--{this.props.datas.price}</h3>
                <h3>COUNT--{this.props.datas.rating.count}</h3>
                <h3>TOTAL--{this.props.datas.price*this.props.datas.rating.count}</h3>
                <button onClick={()=>this.props.increment(this.props.datas)}>+</button>
                <button onClick={()=>this.props.decrement(this.props.datas)}>-</button>
                <button onClick={()=>this.props.reset(this.props.datas)}>Reset</button>
                <button onClick={() => this.props.Delete(this.props.datas)}>Delete</button>
               
            </div>
        )
    }
}