const express = require("express")
const path = require("path")
const app = express()
const publicDirectory = path.join(__dirname, '../public')
console.log(publicDirectory);
app.use(express.static(publicDirectory))
 
app.get("/weather",(req,res)=>{
    res.send("weather")
})
  app.listen(3000,()=>{
    console.log("listing");
  })