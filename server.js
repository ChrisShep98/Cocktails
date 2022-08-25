const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/', (request, response)=>{
    response.render('index.ejs')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})