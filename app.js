const express= require('express');

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
    
        const nodemailer= require('nodemailer');
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:"ad1855411@gmail.com"
            }

        });
        
        const options ={
            from:"ad1855411@gmail.com",
            to:"s43307123@gmail.com",
            subject:"sending email with node.js",
            text:"sent successufully "
        
        };
        transporter.sendMail(options,function(err,info){
            if(err){
                console.log(err);
                return;
            }
            console.log("sent:"+info.response);
        
        })
        

app.listen(process.env.PORT || 9000);
