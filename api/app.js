var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require("dotenv").config();
const sgMail = require('#sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);




//Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var db = mongoose.connection;


//Express
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
    console.log("conectado com o banco");
});

const sendMail = async(msg)=>{
    try{
        await sgMail.send(msg)
        console.log("Msg enviada com sucesso");
    }catch(error){
        console.error(error.response.body);
        if(error.response){
            console.log(error.response.body)
        }
    }
};

sendMail({
    to:"sys.bea@gmail.com",
    from:"sys.bea@gmail.com",
    subject: "Confirmação de cadastr do sistema ",
    text: "Parabéns, Você de se registrar no sitema"
});

module.exports = app;
