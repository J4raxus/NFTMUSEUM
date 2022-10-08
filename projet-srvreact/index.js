var express = require('express')
var app = express()
var mongoose = require('mongoose')
var routerBiblionfts = require('./routers/biblionfts')
// var bodyParser = require('body-parser')
var express = require('express')

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://admin:uaOuSnnpL0btTAci@clusterreact.nlkyh.mongodb.net/CBD?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.once('open', () => {
  console.log('connected')
})


// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

app.get('/', (req,res) => {
  res.json({status:'ok'})
})

app.use('/biblionfts', routerBiblionfts)

app.listen(3001)