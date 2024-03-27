const mongoose = require('mongoose')

const connectDB = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/MERNcurd",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    })
    .then(()=>{
        console.log("mongoose is connected with server")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB;