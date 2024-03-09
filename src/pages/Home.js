import { useEffect, useState } from "react"
import Header from "../components/functionalcomponents/Headers/Navbars"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const HomeScreen=()=>{
    const[data,setData]=useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=> {
        if(response.status===200){
            setData(response.data)
        }
    }
        )
    .catch(err=>(console.log(err)))
},[])

 return(
<> 
<h2>Home screen</h2>
<Header/>
{
    data.map((eachobject)=>{
        return(
            <>
<CustomCard data={eachobject}/>
            </>
        )
    })
}

</>
    )
}
export default HomeScreen



function CustomCard(props) {
    const {data:{image,category,price,description,title,id}}=props

    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{width:150,height:150}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <button> <Link style={{textDecoration:"none"}} to={`/${category}/${id}`}>Browse more</Link> </button>
      </Card.Body>
    </Card>
  );
}
