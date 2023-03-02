import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import data from './data';
import { getEmployee } from './server-apis/getEmployees';
//import { axiosInstance } from './Config/axiosConfig';


function App() {

  const [data, setUsers] = useState(['data'])
//   useEffect(()=>{
//     getEmployee().then(response =>{
//       console.log("Employee Data Response =>",response);
//     }).catch(e=>console.log(e));
//   },[]);
axios.get('http://localhost:3000/data/').then
(response => console.log("Api Response -",response))
setUsers(data)
.catch(err => console.log("Api Error -",err))

  // useEffect(()=>{
  //   getEmployee().then(response =>{
  //     console.log("Employee Data Response =>",response);
  //   }).catch(e=>console.log(e));
  //  // axios.get('').then(response => console.log("Api Response -",response)).catch(err => console.log("Api Error -",err))
  // },[]);
 
}

export default App;
