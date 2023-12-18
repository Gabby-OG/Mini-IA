const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/bog', function (req, res) {
    res.send('Hello blog')
  })

 mongoose.set("strictQuery",false) 
 mongoose.
 connect('mongodb+srv://opokugabriel2004:<Klassified123>@cluster0.1ttedzp.mongodb.net/PracticalIA?retryWrites=true&w=majority')
 .then(() => {app.listen(3000,()=>{
    console.log('Node API app is running on port 3000');
})
    console.log('Connected to MongooDB')
 }).catch((error) => {
    console.log(error)
 }
 )