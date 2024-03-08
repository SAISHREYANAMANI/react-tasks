
import React,{useState} from "react"
const UseStateExample3=()=>{
const [fruits,setFruits]=useState(["apple","banana","grapes","kiwi"])

const handleAdd=()=>{
    let newState=[...fruits,"new fruit"]
    setFruits(newState)
}

const handleDelete = (index) => {
    let newState1 = [];
    setFruits(fruits.filter((eachfruit, i) => i !== index));
  };

    return(
<>
<h1>To do</h1>
<button onClick={handleAdd}>Add fruit</button>
<ol>
{
    fruits.map((eachElement,index)=>
    <React.Fragment key={index} >
  
    <li>{eachElement}</li>
    <button onClick={()=>handleDelete(index)} > delete fruit</button>
        
    </React.Fragment>
    )
    }


</ol>
</>
)
}
export default UseStateExample3