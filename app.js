const express= require('express');
const app=express();
const nodemailer=require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv=require('dotenv');
dotenv.config();

const { google } = require("googleapis");
const req = require('express/lib/request');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID  , 
  process.env.CLIENT_SECRET , 
  process.env.REDIRECT_URL 
);
oauth2Client.setCredentials({
  refresh_token:process.env.REFRESH_TOKEN 
});
const accessToken = oauth2Client.getAccessToken()
    let transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken:accessToken
      }
    });
    const nav= [
        
        
        {
            link:'/home',name:'Email'
        }
        
    ]
    


 
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');//either . or __dirname 




app.get('/',function(req,res){

   res.render("index",
     {
       nav,
       title:'Welcome to Coding Competition #2 by keerthi D , FSD MEAN KKEM OCT BATCH'
      });
});

app.get('/home',function(req,res){
    
       res.render("home",
         {
           nav,
           title:"send Email"
          });
    });
    app.post('/mailer',function(req,res){
        console.log(req.body.email);
        var mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'Hello from nodemailer project .Your given email is Successfully verified!'
          };
          transport.sendMail(mailOptions, function(err, data) {
            if (err) {
              console.log("Error " + err);
              res.send("Something went wrong")
            } else {
              console.log("Email sent successfully");
              res.send("Email sent successfully")
            }
          });




        });
    
        
        

app.listen(process.env.PORT || 9000);
