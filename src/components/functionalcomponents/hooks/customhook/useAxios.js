import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAxios=(url)=>{
   const[data,setData]= useState([])
   const[error,setError]=useState([])
    useEffect(()=>{

    try{ 
        axios.get(url)
        .then(response=>{
            if(response.status===200){
                setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    }
    catch(err){
        console.log(err)
        setError(err)
    }
    finally{
        console.log("always executing")
    }
    },[])
  return [data]
}

export default useAxios