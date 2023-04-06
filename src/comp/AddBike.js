import React,{useState} from 'react'
import axios from 'axios'

function AddBike() {
    const[title,settitle]=useState()
    const[desc,setdesc]=useState()
    const[price,setprice]=useState()
    const[img,setimg]=useState()

    const sumbit = ()=>{
         axios.post("http://localhost:5001/api/rent/add",{title:title,description:desc,price:price,imageUrl:img}).then((res)=>{
        console.log(res);
    }).catch((err)=>{console.log(err);})

    }
   
  return (
<div class='addbikes'>
  <h1>Add New Bike</h1>
  <div class='input-wrapper'>
    <label for='name'>title:</label>
    <input type='text' id='name' placeholder='Enter bike name'  onChange={(e) => settitle(e.target.value)} />
  </div>
  <div class='input-wrapper'>
    <label for='description'>Description:</label>
    <input type='text' id='description' placeholder='Enter bike description'  onChange={(e) => setdesc(e.target.value)}  />
  </div>
  <div class='input-wrapper'>
    <label for='price'>price:</label>
    <input type='text' id='price' placeholder='Enter bike price' onChange={(e) => setprice(e.target.value)}  />
  </div>
  <div class='input-wrapper'>
    <label for='imgurl'>image:</label>
    <input type='text' id='imgurl' placeholder='Enter bike imgurl'  onChange={(e) => setimg(e.target.value)} />
  </div>
  <input type='button' value='Submit'  onClick={sumbit} />
</div>
 
  )
}

export default AddBike