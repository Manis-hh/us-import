"use strict";
import cors from "cors";
import bodyParser from "body-parser";
import express from 'express'
const app = express()
import nodemailer from "nodemailer";
const port =4800;
app.use(cors());
app.use(express.json());
app.post(`/`, (req, res) => {
  let {name} =req.body
  let {email}=req.body
  let {phone}=req.body
  let {company}=req.body
  let {role}=req.body
  let {message}=req.body
    
     
      
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "email-smtp.ap-south-1.amazonaws.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'AKIARG6CI77DA4R656X3', // generated ethereal user
        pass: 'BKM6KD1eSstN4ElabXK0mLsQ5xfqomVPyuHvirlX6a8m', // generated ethereal password
      },
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"TESTING" <manish@tradeimex.in>', // sender address
      to: "manish@tradeimex.in", // list of receivers
      subject: "TESTING REACT WEBSITE", // Subject line
      // text: "Hello world?", // plain text body
      html: `<b>NAME:</b> ${name} <br> <b>EMAIL:</b> ${email} <br> <b>PHONE:</b>${phone} <br> <b>COMPANY:</b>${company} <br> <b>ROLE:</b>${role} <br> <b>MESSAGE:</b>${message}`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);  
});
// async..await is not allowed in global scope, must use a wrapper
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})