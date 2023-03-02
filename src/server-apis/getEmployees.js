import axios from "axios"
import React from "react";
//import { AxiosInstance } from "axios";
export const getEmployee= async()=>{
    // try{
        const response=await axios.get('http://localhost:3000/');
        return response.data.data;
       // }
        // catch(e){
        //     console.log("Api response error",e);
        // }

}
// export const getEmployee= async()=>{
//     try{
//         const response=await AxiosInstance.get('http://localhost:3000');
//         return response.data.data;
//         }catch(e){
//             console.log("Api response error",e);
//         }

// }