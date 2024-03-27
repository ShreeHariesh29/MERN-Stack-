const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const connection = require('./Connection/ConnectionDB')
const UserModel = require('./Models/Usermodel')


const app = express()
app.use(cors())
app.use( express.json())
connection()

app.post("/userdetail", (req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.listen(3001, ()=>{
    console.log('server is runing')
})
