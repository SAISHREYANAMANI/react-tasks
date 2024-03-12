

import {Component} from "react"
import ImageComponent from "../image/imagecomponent"
import Image from "../../components/functionalcomponents/image/image"
class YoutubeButton extends Component{
  constructor(){
    super()
    this.state={
        isSubscribed:false
    }
  }
  handleSubscribe=()=>{
    this.setState({   
            isSubscribed:! this.state.isSubscribed
        }
    )
  }
 


    render(){
        return(
            <div>
            <button onClick={this.handleSubscribe}>{this.state.isSubscribed?"unsubscribe":"subscribe"}</button>

            {
            this.state.isSubscribed? <Image/>:null
            }
            </div>
        )
    }
}
export default YoutubeButton