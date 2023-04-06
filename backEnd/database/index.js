const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mydb'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("db MYSQL connected")
    }
})

const getAllProducts = (callback) => {
    const sql='select * from rent'
   connection.query(sql,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
};
const postall=(callback,data) => {
    const sql='insert  into rent (title,description,price,imageUrl) values(?,?,?,?)'
   connection.query(sql,data,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
};
const deletone=(callback,id) => {
    const sql='DELETE FROM rent WHERE id= ?'
   connection.query(sql,id,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
};
const putone=(callback,data,id) => {
    console.log(data[0],'tgedata');
    const sql='UPDATE rent SET ? WHERE id=?'
   connection.query(sql,[data[0],id],(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   }) 
};

module.exports= { getAllProducts, postall,deletone,putone };