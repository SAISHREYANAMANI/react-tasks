
import React, { Component } from "react";

class FilteredStudents extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      Students: [
        {
          id: 1, name: "suresh", designation: "JS", salary: 500000
        },
        {
          id: 2, name: "naresh", designation: "REACT", salary: 350000
        },
        {
          id:3,name:"shreya",  designation:"CSS",  salary:800000
        },
        {
        id:4,name:"srija",   designation:"ANGULAR",  salary:600000
        },
        {
        id:5,name:"satwika",  designation:"CSS",  salary:750000
       },
       {
        id:6,name:"sahithi",  designation:"ANGULAR",  salary:900000
       },
       {
        id:7, name:"bhavana",   designation:"JS",  salary:30000
       },
       {
      id:8, name:"akhil", designation:"REACT",salary:200000
      }
      ]
    };
  }

  sortFunction = () => {
    let result = this.state.Students.sort((a, b) => b["salary"] - a["salary"]);
    console.log(result);
    this.setState({
      Students: result
    });
  };

  handleFilter = (designation) => {
    let result1 = this.state.Students.filter(student => student.designation === "REACT");
    console.log(result1);
    this.setState({
      data: result1
    });
  };

  handleFilter1 = (designation) => {
    let result2 = this.state.Students.filter(student => student.designation === "JS");
    console.log(result2);
    this.setState({
      data: result2
    });
  };

  handleFilter2 = (designation) => {
    let result3 = this.state.Students.filter(student => student.designation === "CSS");
    console.log(result3);
    this.setState({
      data: result3
    });
  };

  handleFilter3 = (designation) => {
    let result4 = this.state.Students.filter(student => student.designation === "ANGULAR");
    console.log(result4);
    this.setState({
      data: result4
    });
  };

  handleFilter4  = (designation) => {
    if (designation === "ALL") {
      // Display all students
      this.setState({
        data: []
      });
    } else {
      // Filter students based on designation
      let result1 = this.state.Students.filter(student => student.designation === designation);
      console.log(result1);
      this.setState({
        data: result1
      });
    }
  };

  

  render() {
   const buttonStyle={
    padding:"10px", margin:"2px",borderRadius:"14px", backgroundColor:"blue"
   }


    return (
      <div style={{ margin: "180px", padding: "10px" }}>
         
        <button style={buttonStyle} onClick={this.sortFunction}>SALARY</button>
        <button style={buttonStyle}onClick={() => this.handleFilter("REACT")}>REACT</button>
        <button style={buttonStyle}onClick={() => this.handleFilter2("CSS")}>CSS</button>
        <button style={buttonStyle}onClick={() => this.handleFilter3("ANGULAR")}>ANGULAR</button>
        <button style={buttonStyle}onClick={() => this.handleFilter4("ALL")}>ALL</button>


        <div></div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 ? (
              this.state.data.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.designation}</td>
                  <td>{student.salary}</td>
                </tr>
              ))
            ) : (
              this.state.Students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.designation}</td>
                  <td>{student.salary}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilteredStudents;

