const express = require('express');
const app = express();

const client = require("./models/dbConfig")

app.listen(3406, () =>console.log("Server started: 3406"))

client.connect()

//Get routes for Articles
app.get('/articles', (req, res)=>{
    try{
        client.query(`Select * from article`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    }catch(e){
        alert(e)
    }
    
})

app.get('/articles/:bardecode', (req, res)=>{
    try{
        client.query(`Select * from article where barecode='${req.params.bardecode}'`, (err, result)=>{
        
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    }catch(e){
        alert(e)
    }
    
})






