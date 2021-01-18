const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(routes)


app.listen('3000', (req,res)=>{
    console.log('Listening to port 3000...')
})