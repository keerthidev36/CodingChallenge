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