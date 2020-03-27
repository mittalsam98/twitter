const express=require('express');
var morgan = require('morgan')
var cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const app =express();
app.use(cors())
app.use(express.json())

morgan(':method :url :status :res[content-length] - :response-time ms');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("Db connected successfully")
}).catch((err)=>{
    console.log(err)
});



app.get('/',(req,res)=>{
    res.json({
        msg:"Hello World"
    })
})


app.post('/mew',(req,res)=>{
const mew={
    name:req.body.name.toString(),
    tweets:req.body.tweets.toString()
}

})

const PORT= process.env.PORT|| 5000;

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})