const express = require('express');
const app = express();
//var bodyParser = require('body-parser');

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json())


app.get('/', (req, res)=>{
    res:sendFile(__dirname + '/public/index.html' )
})

app.post('/',(req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'cinnamonspa12@gmail.com',
            pass:'kilosh11'
        }
       

    }) 

    const mailOptions = {
       from: req.body.email,
       to: 'cinnamonspa12@gmail.com',
       subject: 'Message from ${req.body.email} : ${req.body.subject}',
       text:req.body.message
    }

    transporter.sendMail(mailOptions,(error, info)=>{
        if (error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:' + Info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log('server running on port ${PORT}')
}) 