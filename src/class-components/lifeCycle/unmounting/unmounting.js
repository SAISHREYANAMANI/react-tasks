import { Component } from "react";


class Unmounting extends Component{


    state={
        isChildVisible:false
    }

    childHandler=()=>{
        this.setState({
            isChildVisible:!this.state.isChildVisible
        })
    }
    render(){
        return(
            <>
            
            <h3>Unmounting phase</h3>
            <button onClick={this.childHandler}> COntrol the child</button>

            {
                this.state.isChildVisible?
                <Child/>:
                <h3>No child found</h3>
    
            }
            </>
        )
    }

}
export default Unmounting 

class Child extends Component{
    componentWillUnmount(){
alert("i am removed from dom")
    }

    render(){
        return(
            <>

            <h1>I AM visible</h1>
            </>
        )
    }

}