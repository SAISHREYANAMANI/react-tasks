import {Component} from "react"

// class ImageComponent extends Component{
//     render(){
//         return (
//             <div>
//                 <h1>HELLO {this.props.name}</h1>
//             </div>
//         )
//     }
// }
// export default ImageComponent

// CONSTRUCTOR WAY for creating or intializing state
class ImageComponent extends Component{
    constructor(){
        super()
        this.state={
           name:"shreya",
           age:22,
           salary:700000
        }
    }
    handleIncrementSalary=()=>{
        // alert("welcome")
        this.setState(
            {
                salary:this.state.salary+1000
            },
            ()=>{
                // console.log(this.state.salary)
            }
        )
    //   console.log(this.state.salary,"outside")
        }
    render(){
        return (

            <div>
                <h1>HELLO {this.state.name} {this.state.age} {this.state.salary}</h1>
                <button onClick={this.handleIncrementSalary}> update salary </button>
            </div>
        )
    }
}
export default ImageComponent