import { Component, PureComponent } from "react";


class ChildComponent extends PureComponent{
    render(){
        console.log("child render")
        return(
            <>

            <h3>Child COMPONENT</h3>
            </>
        )
    }
}
export default ChildComponent