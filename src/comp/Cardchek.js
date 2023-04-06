import React from 'react'

function Cardchek({addtocard ,setcard}) {
  const handlermove = (id)=>{
    const arr =addtocard.filter((use)=>use.id != id)
    setcard(arr)
  }


  return (
    <div>
    <h1>your cart</h1>
    
    <div className='card-container'>
      {addtocard.map((e) => (
        
          <div className='card-pay'>
          <img src={e.imageUrl}></img>
          <p className='name-product'>name product:{e.title} </p>
          <p className='price-product'>price:{e.price}$</p>
         <button onClick={()=>{handlermove(e.id)}}>delete</button>
         <button className='btns' onClick={()=>{
          handlermove(e.id)
          alert(`thank you for rent bike ${e.title} + price: ${e.price} $` )}}>Rent now</button>
       
  
        </div>
        
      ))}
    
    </div>
    </div>
    
  
      
  );

}

export default Cardchek