import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
export default function App() {

  const [data, setData] = useState({
    name: "",
    age: 0,
    date: "",
    programming:"",
  })
  
/*
onClick = { () => {
          axios.post('/test-post', data).then((response) => {

            if (response.status == 200) {
              console.log(response.data)
            }
          }, (error) => {
            console.log(error);
          });   
          
      }
    } 

    fetch("/get-image").then(res => {
      
      console.log(res.json())
    }).then(data => setData(data))
    */

  
  function changeCode(){
    
    // changes the source of the qr code image
    
  }

  function sendData(){
    axios.post('/test-post', data).then((response) => {

      if (response.status === 200) {
        console.log(response.data)
      }
    }, (error) => {
      console.log(error);
    })   
    fetch("/get-image").then(res => {}).then(console.log("I hate life"))
    document.getElementById("qrimage").src = "/get-image";
}
  

  return (
    <div className='background'>

      <h1 className = "title">PAYABLE</h1>
      

      <div className = "container">

        <div class = "row">
        <input className = 'textField' type = "text" placeholder = "Item name"
        onChange= {async (e) => {setData({...data, name: e.target.value})}} />
        </div>
        <div class = "row">
        <input className = 'textField' type = "text" placeholder = "Enter item price" 
        onChange = {(e) => {setData({...data, age: e.target.value})}} />
        </div>
        
          
      </div>
      <div className="row">
        <button onClick = {sendData} className = "addItem">Add Item</button>
      </div>
      <div className = "row">
        <img id = "qrimage" src = "/get-image"/>

      </div>
      
      
      

      
   

    </div>
  )
}
