const express = require ('express')
//sna3na variable esmha express w 9olnelou jibelna
//l package eli esmou express m node modules 
// w 7otha fel varibale eli esmha express

require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
//sna3na const app w te5ou expr ess w eli hia serveur mte3na 


//const port = 3000
// w lehne sna3na l port mte3na 


app.get('/' ,  (req,res) => {
    res.send('hello social media app')
})
//bech nwali najm ne5dem 3la localhost fel browser


const userRoute = require('./routes/user.router')
app.use('/users',userRoute)
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    }
)
//connection 3la bd mte3i

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error :"));
db.once("open",function(){
    console.log("database connected successfully")
})
// l variable hedhi ntasti biha est ce que saret l cnx 3la bd ou nn

app.listen(process.env.PORT , () => {
    console.log(`app listening on port ${process.env.PORT} `);
})
//app.listen() t5ademli l serveur 

