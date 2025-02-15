import {RegistrationService,LoginService,LogoutService} from "../service/UserService.js";


export const Registration=async (req,res)=>{
    let result = await RegistrationService(req)
    return res.json(result)

}


export const Login=async (req,res)=>{
    let result = await LoginService(req,res)
    return (result)

}


export const UserLogout = async (req, res) => {
    let result = await LogoutService(req,res)
    return res.json(result)
}
