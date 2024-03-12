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
        return true
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
    }
    getSnapshotBeforeUpdate(prevprops,prevState){
        console.log( prevState,"previous state")

    }


render(){
   

console.log("render")
    return(
        <>
        <h2>hello</h2>
        <button onClick={this.increment}>increment  {this.state.count}</button>
        
       
        
        </>
    )

}




}

export default UpdatingPhase