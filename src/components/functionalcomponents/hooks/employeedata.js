// import React,{ Component } from "react";

// const Employee =()=>{
//     const [Employee,setEmployee]=useState([
//         {
//         name:"SAI SHREYA",
//         age:21,
//         salary:70000000,
//         Designation:"React developer"
//     },
//     {
//         name:"shreya",
//         age:21,
//         salary:90000000,
//         Designation:"BACKEND developer"
//     },
//     {
//         name:"SATWIKA",
//         age:21,
//         salary:70000000,
//         Designation:"React developer"
//     },
//     {
//         name:"RASAGNA",
//         age:22,
//         salary:80000000,
//         Designation:"React developer"
//     },
//     {
//         name:"SRIA",
//         age:23,
//         salary:4000000,
//         Designation:"JS developer"
//     },
//     {
//         name:"VARSHA",
//         age:24,
//         salary:92000000,
//         Designation:"React developer"
//     },
//     {
//         name:"HEMA",
//         age:22,
//         salary:65000000,
//         Designation:"FRONTEND developer"
//     },{
//         name:"SHIRISHA",
//         age:20,
//         salary:90000000,
//         Designation:"JS developer"
//     }
// ])


   
    
    
//     const handleAdd=()=>{
//         let newState=[...Employee,"new Employee"]
//         setEmployee(newState)
//     }
    
//     const handleDelete = (index) => {
//         let newState1 = [];
//         setEmployee(Employee.filter((eachfruit, i) => i !== index));
//       };
    
//         return(
//     <>
//     <h1>To do</h1>
//     <button onClick={handleAdd}>Add Employee</button>
//     <ol>
//     {
//         Employee.map((eachElement,index)=>
//         <React.Fragment key={index} >
      
//         <li>{eachElement}</li>
//         <button onClick={()=>handleDelete(index)} > delete Employee</button>
            
//         </React.Fragment>
//         )
//         }
    
    
//     </ol>
//     </>
//     )
  


// }
// export default Employee
import React, { useState } from "react";

const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      name: "SAI SHREYA",
      age: 21,
      salary: 70000000,
      Designation: "React developer",
    },
    {
      name: "shreya",
      age: 21,
      salary: 90000000,
      Designation: "BACKEND developer",
    },
    {
      name: "SATWIKA",
      age: 21,
      salary: 70000000,
      Designation: "React developer",
    },
    {
      name: "RASAGNA",
      age: 22,
      salary: 80000000,
      Designation: "React developer",
    },
    {
      name: "SRIA",
      age: 23,
      salary: 4000000,
      Designation: "JS developer",
    },
    {
      name: "VARSHA",
      age: 24,
      salary: 92000000,
      Designation: "React developer",
    },
    {
      name: "HEMA",
      age: 22,
      salary: 65000000,
      Designation: "FRONTEND developer",
    },
    {
      name: "SHIRISHA",
      age: 20,
      salary: 90000000,
      Designation: "JS developer",
    },
  ]);

  const handleAdd = () => {
    // Adding a new employee template
    const newEmployee = {
      name: "New Employee",
      age: 0,
      salary: 0,
      Designation: "New Position",
    };

    setEmployees([...employees, newEmployee]);
  };

  const handleDelete = (index) => {
    // Creating a new array without the deleted employee
    setEmployees(employees.filter((eachobj, i) => i !== index));
  };

  return (
    <>
      <h1>Employee List</h1>
      <button onClick={handleAdd}>Add Employee</button>
      <ol>
        {employees.map((employee, index) => (
          <React.Fragment key={index}>
            <li>
              {employee.name}  {employee.Designation} {employee.salary}
            </li>
            <button onClick={() => handleDelete(index)}>
              Delete Employee
            </button>
          </React.Fragment>
        ))}
      </ol>
    </>
  );
};

export default Employee;
