import { Component } from "react";


class DomManipulation extends Component{
   state={
        counter:0,
        favColor:"red"
   }

increment=(value)=>{
    this.setState({
        counter:this.state.counter+value
    })
}
//  component did mount onlt executes once when the page loads
componentDidMount(){
    document.title=this.state.counter
}

// comonent did update method updates the dom every time when the component updates
componentDidUpdate(){
    document.title=this.state.counter
}

// derived state from prop
static getDerivedStateFromProps(props,state){
    return {favColor:props.favColor};
}

    render(){
        return(
            <>
            <h3>Dom</h3>
            <h3> {this.state.favColor}</h3> 
            <h3>{this.state.counter}</h3>
            <button onClick={()=>this.increment(5)}>Increment</button>
             </>
        )
    }
}
export default DomManipulation
