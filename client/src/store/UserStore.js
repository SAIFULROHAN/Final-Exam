import {create} from "zustand";
import axios from "axios";
import {getEmail,setEmail,unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";

const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },


    LoginFormData:{email:""},
    LoginFormChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },


    UserOTPRequest:async (email)=>{
        set({isFormSubmit:true})
        console.log(email)
        let res = await axios.get(`/api/Registration/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
        return res.data['status']==="success";
    },


    UserLogoutRequest:async ()=>{
        set({isFormSubmit:true})
        let res = await axios.get(`/api/UserLogout`);
        set({isFormSubmit:false})
        return res.data['status']==="success";
    },


    OTPFormData:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{...state.OTPFormData,
                [name]:value}
        }))
    },



    VerifyLoginRequest:async (otp)=>{
        set({isFormSubmit:true})
        let email= getEmail();
        console.log(email,otp)
        let res=await axios.get(`/api/VerifyOTP/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status']==="success";
    },

    isFormSubmit:false,

}))

export default UserStore;