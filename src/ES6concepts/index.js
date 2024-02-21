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
// newObj=P.filter(eachobject=>eachobject.pn)
// console.log(newObj)
// OUTPUT
// [
//     { pn: 'mackbook', price: 100000, models: [ 'm1', 'm2', 'm3' ] },
//     { pn: 'dell', price: 50000, models: [ 'inspiron', 'v2', 'insv3' ] },
//     { pn: 'hp', price: 650000, models: [ 'pavilion', 'victus', 'm3' ] }
//   ]

// let count=0
// let totalCost=P.reduce((count,eachobj)=>{return count+eachobj.price*eachobj.qty},count)
// console.log( totalCost,"TOTALCOST")
// // OUTPUT  800000 TOTALCOST


// let DiscountPrice=(totalCost,discount)=>{
//     return totalCost*(100-discount)/100
//   }
// // console.log(DiscountPrice(80000,20))
// let DiscountPercentage=20
// let FinalCost=DiscountPrice(totalCost,DiscountPercentage)
// console.log(FinalCost+ " This is the final price after discount applied",`you saved ${totalCost-FinalCost}`)
  

//  let newObj=P.map((eachobj,index)=>{return{...eachobj,id:index+1}})
//  console.log(newObj)

let TargetProduct=
    {
        pn:"hp",
        price:650000,
        models:["pavilion","victus","m3"],
        qty:1,
        id:3
    }


function CountDecrement(P,target){
    let result=P.map((eachobj)=>{
        if(eachobj.id===TargetProduct.id){
            return{...eachobj,qty:eachobj.qty-1}
        } 
        else{
            return eachobj
        }
       
    })
   
     console.log(result)  
}
CountDecrement(P,TargetProduct)






// Products=[
//     {
//       name:"shrreee",
//       age:23
//     },
//     {
//       name:"ram",
//       age:25
//     },
//       {
//       name:"ramya",
//       age:28
//     },
//      {
//       name:"ra",
//       age:20
//     }
//     ]
//   const newobj = Products.map((eachobj) => eachobj.age * 2);
// [ 46, 50, 56, 40 ]

// const newobj = Products.map((eachobj) => eachobj.age > 29);
// [ false, false, false, false ]

//   const newobj = Products.map((eachobj) => eachobj.age);
//  output [ 23, 25, 28, 20 ]

// const newobj = Products.map((eachobj) => eachobj.name);
// output [ 'shrreee', 'ram', 'ramya', 'ra' ]

// const newobj = Products.map((eachobj) => eachobj.name=="ram");
// output [ false, true, false, false ]

// const newobj = Products.map((eachobj) => eachobj=true && eachobj.age>20);
// output [ true, true, true, false ]

// const newobj = Products.map((eachobj) => eachobj.age %2==0);
// [ false, false, true, true ]

// const newobj = Products.map((eachobj) => eachobj.age %2);
// [ 1, 1, 0, 0 ]


// let newObj=Products.map((eachobj) => {
//     return {...eachobj,"technology":["css", "html","js"]}
//   })
//   console.log(newObj)

//   [
//     { name: 'shrreee', age: 23, technology: [ 'css', 'html', 'js' ] },
//     { name: 'ram', age: 25, technology: [ 'css', 'html', 'js' ] },
//     { name: 'ramya', age: 28, technology: [ 'css', 'html', 'js' ] },
//     { name: 'ra', age: 20, technology: [ 'css', 'html', 'js' ] }
//   ]



// const newobj = Products.filter((eachobj) => eachobj=true && eachobj.age==25);
//  output [ { name: 'ram', age: 25 } ]

// const newobj = Products.filter((eachobj) => eachobj.age);
// output [
//     { name: 'shrreee', age: 23 },
//     { name: 'ram', age: 25 },
//     { name: 'ramya', age: 28 },
//     { name: 'ra', age: 20 }
//   ]
//   console.log(newobj);

// const newobj = Products.filter((eachobj) => eachobj.age%2==0);
// output [ { name: 'ramya', age: 28 }, { name: 'ra', age: 20 } ]

// const newobj = Products.filter((eachobj) => eachobj.name=="ram");
//  output [ { name: 'ram', age: 25 } ]

// const newobj = Products.filter((eachobj) =>eachobj=true && eachobj.age>20)
//  output [
//     { name: 'shrreee', age: 23 },
//     { name: 'ram', age: 25 },
//     { name: 'ramya', age: 28 }
//   ]

// const newobj = Products.filter((eachobj) => eachobj.age % 2);
// [ { name: 'shrreee', age: 23 }, { name: 'ram', age: 25 } ]

// const newobj = Products.filter((eachobj) => eachobj.age % 2==1);
// [ { name: 'shrreee', age: 23 }, { name: 'ram', age: 25 } ]



// Products.forEach((age) => {
//     console.log(age * 2)
//   })
// output
// NaN
// NaN
// NaN
// NaN

