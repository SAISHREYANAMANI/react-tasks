var P=[{
    pn:"mackbook",
    price:100000,
    models:["m1","m2","m3"],
    qty:4,
    id:1
},
    {
        pn:"dell",
        price:50000,
        models:["inspiron","v2","insv3"],
        qty:1,
        id:2
},
        {
            pn:"hp",
            price:650000,
            models:["pavilion","victus","m3"],
            qty:10,
            id:3
    }
]

let TargetProduct=
    {
        pn:"hp",
        price:650000,
        models:["pavilion","victus","m3"],
        qty:1,
        id:3
    }


// function CountDecrement(P,target){
//     let result=P.map((eachobj)=>{
//         if(eachobj.id===TargetProduct.id){
//             return{...eachobj,qty:eachobj.qty-1}
//         } 
//         else{
//             return eachobj
//         }
       
//     })
   
//      console.log(result)  
// }
// CountDecrement(P,TargetProduct)


function CountIncrement(P,target){
    let result=P.map((eachobj)=>{
        if(eachobj.id===TargetProduct.id){
            return{...eachobj,qty:eachobj.qty+1}
        } 
        else{
            return eachobj
        }
       
    })
   
     console.log(result)  
}
CountIncrement(P,TargetProduct)