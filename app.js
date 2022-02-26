const express= require('express');
// const nodemailer= require('nodemailer');
// const { google} =require('googleapi');

// const CLIENT_ID = '135106361763-tvdu3746d328ri07plfaidvohesberg9.apps.googleusercontent.com'
// const CLEINT_SECRET='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'

// const REDIRECT_URL='https://developers.google.com/oauthplayground'
// const REFRESH_TOKEN='1//04RQ-L-yKlDDGCgYIARAAGAQSNwF-L9IrBFMtDsro0Vc_SW_LdKiyXaEVKQPqtrSxkE1JdBpLEFf4wroSTfNlwWlj-2QUCiGeBVs'
// const oAuth2Client =new google.auth.OAuth2(CLIENT_ID,CLEINT_SECRET,REDIRECT_URL)
// oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

//  async function sendMail(){
// try{
//  const accessToken =await oAuth2Client.getAccessToken()
//  const transport =nodemailer.createTransport({
//      service:'gmail',
//      auth: {
//          type:'OAuth2',
//          user:'ad1855411@gmail.com',
//          clientId:CLIENT_ID,
//          clientSecret:CLEINT_SECRET,
//          refreshToken:REFRESH_TOKEN,
//          accessToken:accessToken,
//      }
//  })
//  const mailOptions={
//      from:'ad1855411@gmail.com ',
//      to:'s43307123@gmail.com',
//      subject:"Nodemmailer Project",
//      text:'Hi from your nodemailer project',
//      html:'<h1>Hello from your nodemailer Project'

//  };
//  const result= await transport.sendMail(mailOptions)
//  return result
// }
// catch(error){

// }
//  }
//  sendMail()
//  .then((result)=>console.log("Email sent Successfully",result))
//  .catch((error)=>console.log(error.message));

const app=express();

    const nav= [
        
        
        {
            link:'/home',name:'Email'
        }
        // ,
        // {
        //     link:'/signup',name:'Sign Up'
        // }
    ]
    

//  const homeRouter=require('./src/routes/homeRoutes')(nav)
 
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');//either . or __dirname 


  // app.use('/home',homeRouter);



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
        res.send("Mail sent Successfully");
        });
    
        
        // const transporter = nodemailer.createTransport({
        //     service:'gmail',
        //     auth:{
        //         user:"ad1855411@gmail.com"
        //     }

        // });
        
        // const options ={
        //     from:"ad1855411@gmail.com",
        //     to:"s43307123@gmail.com",
        //     subject:"sending email with node.js",
        //     text:"sent successufully "
        
        // };
        // transporter.sendMail(options,function(err,info){
        //     if(err){
        //         console.log(err);
        //         return;
        //     }
        //     console.log("sent:"+info.response);
        
        // })
        

app.listen(process.env.PORT || 9000);
