import { Component } from "react";
class CircleIncrement  extends Component{
   
        state={
        circles:[]
        }
        addCircles=()=>{

            this.setState(
                {
                    circles:[...this.state.circles,false]
                }
            )
    
        }
        changecolor=(index)=>{
            console.log(index,this.state.circles)
    
        }
render(){ 
    return(
        <>
        <h2>Circle</h2>

        <button onClick={this.addCircles} >Click to add circles</button>
               <h2>Total Circles -- {this.state.circles.length}</h2>
      
             {
                this.state.circles.map((element,index)=><Circle  isHighlight={element} changecolor={this.changecolor} index={index} />)
             }
          


        </>
    )
    
}
}
export default CircleIncrement



class Circle extends Component{
    render(){
        console.log(this.props.isHighlight)
        return(
            <div style={{width:100,height:100,borderRadius:"50%",border:"2px solid black",backgroundColor:this.props.isHighlight?"black":null}}
            
            onClick={()=>this.props.changecolor(this.props.index)}
            >

            </div>
        )
    }
}