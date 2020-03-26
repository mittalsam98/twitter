const express=require('express');
var morgan = require('morgan')
var cors = require('cors')

const app =express();
app.use(cors())

morgan(':method :url :status :res[content-length] - :response-time ms');

const PORT= process.env.PORT|| 5000;

app.get('/',(req,res)=>{
    res.json({
        msg:"Hello World"
    })
})


app.post('/mew',(req,res)=>{
    console.log("hello")
})
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})