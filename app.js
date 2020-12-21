const express = require('express');
const app = express(); 

app.get('/', function(req , res){
res.send('ololo')
})

app.listen(4000, function(){
console.log('sucess')
})