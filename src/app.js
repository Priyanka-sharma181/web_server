const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

const publicPath = path.join(__dirname, '../public')
const temletePath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
// set handelbars engine and views location 
app.set('view engine', 'hbs');
app.set('views', temletePath);
hbs.registerPartials(partialPath)


app.use(express.static(publicPath))
app.get("",(req,res)=>{
    res.render('index',{
        Title :"weather",
        name:"priyanka"
    })
})
app.get('/about',(req,res)=>{
  res.render('about',{
    Title:"About me",
    name:"priyanka sharma"
  })
})
app.get('/help',(req,res)=>{
  res.render('help',{
    msg:"This the some help text",
    Title:"Help",
    name:"priyanka",
  })
})
app.get("/weather",(req,res)=>{
    res.send("weather")
})
  app.listen(3000,()=>{
    console.log("listing");
  })