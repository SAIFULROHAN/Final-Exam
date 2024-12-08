import UserModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js"  // Change This Code By Project Requirement
import {JWT_EXPIRE_TIME} from "../config/Config.js";
//import md5 from 'md5';
import mongoose from "mongoose";
import SendEmail from "../utility/emailUtility.js"

{/*
export const RegistrationService = async (req)=> {
    try {
        let email=req.params.email;
        let code = Math.floor(100000+Math.random()*900000);
        let EmailText = `Your email address is <br><h2>${email}</h2>`;
        let EmailSubject = 'Email Verification'

        await SendEmail(email,EmailText,EmailSubject);

        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true});
        return {status:"success",message:"6 Digit OTP Has Been sent successfully."};
    } catch (error) {
        return {status:"Fail",message:error.toString()}
    }
}


//Verify
export const VerifyOTPService = async (req) => {
    try {
        const email = req.params.email || req.body.email; // Use params or body
        const otp = req.params.otp || req.body.otp; // Use params or body

        // Check if the email and OTP combination exists
        const total = await UserModel.countDocuments({ email: email, otp: otp });

        if (total === 1) {
            // Retrieve User ID
            const user = await UserModel.findOne({ email: email, otp: otp }).select('_id');

            // Create Token
            const token = TokenEncode(email, user._id.toString());

            // Update OTP to 0
            await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

            return { status: "success", message: "Valid OTP", token: token };
        } else {
            return { status: "fail", message: "Invalid OTP" };
        }
    } catch (e) {
        console.error("Error in VerifyOTPService:", e);
        return { status: "Fail", message: e.toString() };
    }
};
*/}


export const RegistrationService=async (req)=>{

    try{
        let reqBody = req.body;
        //reqBody.password = md5(req.body.password);
        reqBody.password = (req.body.password);

        let user = await UserModel.find({reqBody})
        if(user.length >0){
            return {status:"error",message:"Have Account"};
        } else {
            let data = await UserModel.create(reqBody);
            return  {status:"success",message:"Registration Successful",data:data}
        }
    }  catch(err){
        return  {status:"error",error:err.toString()};
    }
};


export const LoginService=async (req,res)=> {

    try {
        // Ensure body is parsed correctly
        const reqBody = req.body;
        const email = reqBody.email;
        //const password = md5(reqBody.password);
        const password = (reqBody.password);

        // Use aggregation to find matching user
        const matchingStage = { $match: { email, password } };
        const projection = { $project: { _id: 1, email: 1 } };

        const data = await UserModel.aggregate([matchingStage, projection]);

        if (data.length > 0) {
            const token = TokenEncode(data[0].email);

            // Set Cookie
            const options = {
                maxAge: JWT_EXPIRE_TIME,
                httpOnly: true,
                sameSite: 'None', // Consider if you really need 'None'
                secure: true, // Ensure you're serving over HTTPS
            };
            res.cookie('token', token, options);
            return { status: 'success', message: 'Login Successful', token, data: data[0] };
        } else {
            return { status: 'Unauthorized', message: 'Invalid email or password' };
        }
    } catch (err) {
        return  {status:"error",error:err.toString()};
    }
};



