import nodemailer from 'nodemailer';
//import {EMAIL_HOST,EMAIL_PASS,EMAIL_PORT,EMAIL_SECURITY,EMAIL_USER} from "../config/config.js";
import dotenv from "dotenv";
dotenv.config();

const SendEmail=async (EmailTo,EmailText,EmailSubject)=>{

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURITY,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    let mailOptions = {
        from:'Exam Student Registration <EMAIL_USER>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText,
    }
    return await transporter.sendMail(mailOptions);
}
export default SendEmail;