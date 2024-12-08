import {RegistrationService,LoginService} from "../service/UserService.js";
{/*
export const Registration=async (req,res)=>{
    let result = await RegistrationService(req)
    return res.json(result)

}


export const VerifyOTP = async (req, res) => {
    const result = await LoginService(req);

    if (result.status === "success") {
        const cookieOption = { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true };

        // Corrected cookie setting method
        res.cookie('token', result.token, cookieOption);

        return res.status(200).json(result);
    } else {
        return res.status(200).json(result);
    }
};

export const UserLogout = async (req, res) => {
    let cookieOption={expires:new Date(Date.now()-24*60*60*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}

*/}

export const Registration=async (req,res)=>{
    let result = await RegistrationService(req)
    return res.json(result)

}


export const VerifyOTP=async (req,res)=>{
    let result = await LoginService(req,res)
    return res.json(result)

}
