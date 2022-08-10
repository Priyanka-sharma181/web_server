const express = require("express")
const app = express()
const path = require("path")

const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../views')
// app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, viewsPath));

app.use(express.static(publicDirectory))
app.get("",(req,res)=>{
    res.render('index')
})
app.get("/weather",(req,res)=>{
    res.send("weather")
})
  app.listen(3000,()=>{
    console.log("listing");
  })