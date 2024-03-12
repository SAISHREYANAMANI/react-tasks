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
            const updatedCircles = [...this.state.circles];
            updatedCircles[index] = !updatedCircles[index];

         this.setState({
          circles: updatedCircles,
        });
  };
        
        
render(){ 
    return(
        <>
        <h2>Circles</h2>

        <button onClick={this.addCircles} >Click to add circles</button>
               <h2>Total Circles -- {this.state.circles.length}</h2>
      
             {
                this.state.circles.map((element,index)=><Circle key={index} isHighlight={element} changeColor={this.changecolor} index={index} />)
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
            <div style={{width:100,height:100,borderRadius:"50%",border:"2px solid black",backgroundColor:this.props.isHighlight?"black":"white"}}
            
            onClick={()=>this.props.changeColor(this.props.index)}
            >

            </div>
        )
    }
}
