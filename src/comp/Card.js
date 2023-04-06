
import React,{useState} from "react";
import axios from 'axios'
export default function Card({data,getonedata,handlerolad}) {

    const [deleteitem,setdelete] = useState([])
   


const handeldelete =()=>{
    axios.delete(`http://localhost:5001/api/rent/delete/${deleteitem}`).then((res)=> {
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}

console.log(deleteitem);
    return (
        
       
        
        <div className="card">
          
            <img src={data.imageUrl} className="card--image" />
            <p className="card-title">{data.title}</p>
            <p className="desc"> {data.description}</p>
            <p className="ps"><span className="bold">from ${data.price}</span>/ hours</p>
            <button className="get-button" onClick={()=>{ getonedata(data)
                alert("you added bike to the cart"); }}>Get now</button>
            <button className="delte-button" onClick={()=>{ 
                setdelete(data.id)
                handeldelete()
                handlerolad()
                
                 } }>Delete</button>
        </div>
        
    )

}