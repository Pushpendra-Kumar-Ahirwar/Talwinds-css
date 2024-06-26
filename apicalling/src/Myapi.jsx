import React, { useEffect, useState } from "react";
const api="https://jsonplaceholder.typicode.com/users"
export default function Myapi() {
  const [data, setData]=useState([])
   // const fetchusers= async (url)=>{
  //   try{
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     console.log(data)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  useEffect(() => {
  
    fetch(api).then((req) => {
      req.json().then((res) => {
        console.log(res);
        setData(res) 
      });
    });
  }, [])

 
  return (
    <div>
    <table border={"2px"}>
      <tr>
        <td>Name</td>
        <td>Mail</td>
        <td>Username</td>
        <td>Address</td>
      </tr>
      {
      data.map((item)=>
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.username}</td>
          <td>{item.address.city}</td>
        </tr>
        
      )}
      
    </table>
    </div>
  )
}
