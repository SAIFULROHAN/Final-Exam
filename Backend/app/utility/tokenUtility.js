import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export const TokenEncode = (email,user_id)=>{
    const KEY = process.env.JWT_KEY
    const EXPIRE = { expiresIn: parseInt(process.env.JWT_EXPIRE_TIME) };
    console.log(EXPIRE)
    const PAYLOAD={email:email,user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const TokenDecode =(token)=>{
    try{
        return jwt.verify(token,process.env.JWT_KEY)
    } catch(error){
        return null
    }
}