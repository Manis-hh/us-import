const AWS = require('aws-sdk');
const env = require('dotenv');
env.config();
const awsConfig = {
    accessKeyId: 'AKIARG6CI77DA4R656X3',
    secretAccessKey: 'BKM6KD1eSstN4ElabXK0mLsQ5xfqomVPyuHvirlX6a8m',
    region:'ap-south-1'
    
}
const SES= new AWS.SES(awsConfig);
const sendEmail = async ()=>{
    const email ='manish@tradeimex.in';
    try{
        const params ={
            Source:email,
            Destination:{
                ToAddresses:[email]
            },
            Message:{
                subject:{
                    Data:`<h1>TEST EMAIL</h1>`
                }
            }
        };
        const emailSent= await SES.sendEmail(params).promise();
        emailSent
        .then(Data =>{
            console.log("EMAIL SENT ",Data)
        })
        .catch(err =>{
            console.log(error);
        })
    }
    catch(error){
        console.log(error);
    }
}
module.exports = sendEmail;