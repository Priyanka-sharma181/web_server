const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forcast")

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
app.get('/weather', (req, res) => {
  if (!req.query.address) {
      return res.send({
          error: 'You must provide an address!'
      })
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
      if (error) {
          return res.send({ error })

      }

      forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
              return res.send({ error })
          }
          res.send({
              forecast: forecastData,
              location,
              address: req.query.address
              
          })
          
             })
  })
})
app.get('/products', (req, res) => {
  if (!req.query.search) {
      return res.send({
          error: 'You must provide a search term'
      })
  }
  res.send({
      products: []
  })
})
app.get("/help/*",(req,res)=>{
  res.render('404page',{
    Title:"404",
    name:"priyanka",
    messageError:"Help page not found"
  })
})
app.get("*",(req,res)=>{
  res.render('404page',{
    Title:"404",
    name:"priyanka",
    messageError:"page not found"
  })
})
  app.listen(3000,()=>{
    console.log("listing");
  })