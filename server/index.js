const express = require('express')
const cors    = require('cors')
require('dotenv').config()
const connectToDB = require('./config/db')
const userRoute = require('./routes/user.route.js')


const PORT = process.env.PORT || 8002
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/v1/user',userRoute)


 connectToDB();

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})

