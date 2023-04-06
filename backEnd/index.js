const express = require('express');
const cors =require('cors');
const { getAllProducts, postall,deletone,putone} = require('../backEnd/database/index');
const port = 5001;
const app = express()
app.use(express.json())
//uncomment to use mongodb
// const db = require('./mongoDb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());



app.get('/api/rent',(req,res)=> {
   getAllProducts((err,results)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(results)
   })
})

app.post('/api/rent/add',(req,res)=>{
    console.log(req.body.title)
  postall((err,results)=>{
   if(err) res.status(500).send(err)
   else res.status(200).send(results)
  },[req.body.title,req.body.description,req.body.price,req.body.imageUrl])
})

app.delete('/api/rent/delete/:id',(req,res)=>{
  deletone((err,results)=>{
   if(err) res.status(500).send(err)
   else res.status(200).send(results)
  },[req.params.id])
})

app.put('/api/rent/update/:id',(req,res)=>{
  putone((err,results)=>{
   if(err) res.status(500).send(err)
   else res.status(200).send(results)
  },[req.body],[req.params.id])
})




app.listen(port, ()=>{
console.log(`listening on ${port}`);
})