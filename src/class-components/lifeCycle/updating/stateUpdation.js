import { Component } from "react";




class UpdatingPhase extends Component{
   state={
    count:0
   }

   increment=()=>{
    this.setState({
        count:this.state.count+1
    })
   }
   componentDidUpdate(){
    console.log("componentdidupdate")
   }
    shouldComponentUpdate(){
        console.log("should component update")
        return false
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
    }

render(){
   

console.log("render")
    return(
        <>
        <h2>hello</h2>
        <button onClick={this.increment}>increment</button>
        
        {this.state.count}
        
        </>
    )

}




}

export default UpdatingPhase