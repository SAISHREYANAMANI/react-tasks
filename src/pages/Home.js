


import { useEffect, useState } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Header from "../components/functionalcomponents/navbars/Navigation";
import { Spinner } from "react-bootstrap";
import useAxios from "../components/functionalcomponents/hooks/customhook/useAxios";
import { BASE_PROD_URL, endPoints } from "../endpoints/endpoint";




const HomeScreen =()=>{
   // const [data,setData]=useState([])
    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then(response=>{
    //         if(response.status===200){
    //             setData(response.data)
    //         }
    //     })
    //     .catch(err=>console.log(err))
    // },[])

    // const[data]=useAxios("https://fakestoreapi.com/products")
    const[data]=useAxios(`${BASE_PROD_URL}${endPoints.products}`)
    const[day,setDay]=useState(null)
              useEffect(()=>{
                setDay(getGreeting())
                // console.log(new Date().getHours())
                // setDay(getToday())
                console.log(getGreeting())
              },[])

    function getToday(){
      let day;
      console.log(new Date().getDay())
      switch(new Date().getDay()){
        case 0:
          day="SUNDAY"
          break
        case 1:
          day="MONDAY"
          break
        case 2:
          day="TUESDAY"
          break
        case 3:
          day="WEDNESDAY"
          break
        case 4:
          day="THRUSDAY"
          break
        case 5:
          day="FRIDAY"
          break
        case 6:
          day="SATURDAY"
          break
        default:
          day=null
      }
      return day
    }
    function getGreeting(){
      const timeInHours=new Date().getHours()
      let greeting;
      if(timeInHours>6 && timeInHours<11){
        greeting="GOOD MORNING"
      }else if(timeInHours>=11 && timeInHours<16){
        greeting="GOOD AFTERNOON"
      }
      else if(timeInHours>=16 && timeInHours<18){
        greeting="GOOD EVENING"
      }
      else{
        greeting="GOOD NIGHT"
      }
      return greeting
    }


    return(
        <>
         <Header/>
    <h2>{day}</h2>
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
















