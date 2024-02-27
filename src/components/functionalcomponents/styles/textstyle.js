// inline styling
// const Styletext=()=>{
//     return(
//         <div> 

//             <h3 style={{color:"red", backgroundColor:"blue"}}>HELLO</h3>
//         </div>
//     )
// }
// export default Styletext



// inline object styling
// const Styletext=()=>{
//   const  objstyle= {color:"red", backgroundColor:"blue"}
//         return(
//             <div> 
//                 <h3 style={objstyle}>HELLO</h3>
//             </div>
//         )
//     }
//     export default Styletext




// external styling
import "./textstyle.css"
// or we can import directly app.css file by adding stylings there
    const Styletext=()=>{
        const  objstyle= {color:"red", backgroundColor:"blue"}
              return(
                  <div> 
                      <h3 style={objstyle}>HELLO</h3>
                      <h4 className="text">AM SHREYA</h4>
                  </div>
              )
          }
          export default Styletext


// external module styling
// import style from "./textstyle.module.css"
// const Styletext=()=>{
//     const  objstyle= {color:"red", backgroundColor:"blue"}
//           return(
//               <div> 
//                   <h3 style={objstyle}>HELLO</h3>
//                   <h4 className="text">AM SHREYA</h4>
//                   <h2 className={style.hi}>EXTERNAL MODULE STYLES</h2>

//               </div>
//           )
//       }
//       export default Styletext




// SASS styling
     