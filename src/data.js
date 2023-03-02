import React from "react";
function data(){
    const data = [
        {id:1, name: "Milan", salary:20000, age: 21 },
        {id:2, name: "Smit",salary:30000, age: 22},
        {id:3, name: "Prince",salary:40000, age: 23},
      ]

      return (
        <div className="App">
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Employee Age</th>
          </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.salary}</td>
                  <td>{val.age}</td>
                </tr>
              )
            })}
          </tbody>
         </table>
        </div>
      );
}
export default data;