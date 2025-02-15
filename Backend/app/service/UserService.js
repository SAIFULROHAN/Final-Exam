import UserModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js"  // Change This Code By Project Requirement
//import {JWT_EXPIRE_TIME} from "../config/Config.js";
//import md5 from 'md5';
import mongoose from "mongoose";
import SendEmail from "../utility/emailUtility.js"




export const RegistrationService=async (req)=>{

    try{
        let reqBody = req.body;
        //reqBody.password = md5(req.body.password);
        reqBody.password = req.body.password;

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


export const LoginService = async (req,res) => {
    try {
        const { email, password } = req.body;

        // Input Check
        if (!email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "Need All Info"
            });
        }

        // Find Users
        let user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status: "failed",
                message: "No User Found"
            });
        }

        // Password Check
        if (user.password !== password) {
            return res.status(401).json({
                status: "failed",
                message: "Wrong Password"
            });
        }

        // Token Set
        const token = TokenEncode(user.email);

        // Cookies Set
        res.cookie('token', token, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'Lax',
            secure: false,
        });

         res.status(200).json({
            status: 'success',
            message: 'Login Successful',
            token,
            data: { id: user._id, email: user.email }
        });

    } catch (err) {
        return res.status(500).json({
            status: "error",
            error: err.toString()
        });
    }

};





export const LogoutService = async (req, res) => {
    try {
        // Clear the authentication cookie
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'Lax', // Consider if you really need 'None'
            secure: false, // Ensure you're serving over HTTPS
        });

        return { status: 'success', message: 'Logout Successful' };
    } catch (err) {
        return { status: 'error', error: err.toString() };
    }
};



