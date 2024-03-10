


import { useEffect, useState } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Header from "../components/functionalcomponents/navbars/Navigation";
import { Spinner } from "react-bootstrap";



const HomeScreen =()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    },[])
    return(
        <>
         <Header/>
    
         {

            data.length>0
            ?
            data.map((eachObject)=>{
                return(
                    <>
                    <CustomCard data={eachObject}   />
                    </>
                )
            })
            :
            <Spinner/>
         }
        
        </>
    )
}
export default HomeScreen





function CustomCard(props) {
    const {data:{image,category,price,description,title,id}}=props
    const handleClick=()=>{

    }
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={image} style={{width:100}} height={100}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>

        <button>
        <Link style={{textDecoration:"none"}} to={`/${category}/${id}`}  >
            Navigate
         </Link>

        </button>

          
            
           

      </Card.Body>
    </Card>
  );
}
















