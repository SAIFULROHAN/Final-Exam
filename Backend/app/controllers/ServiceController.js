import {CreatServiceService,getAllServiceService,updateServiceService,deleteServiceService} from '../service/serviceService.js';


export const CreateService=async (req,res)=>{
    let result = await CreatServiceService(req,res)
    return res.json(result)

}


export const getAllService=async (req,res)=>{
    let result = await getAllServiceService(req,res)
    return res.json(result)

}


export const UpdateService=async (req,res)=>{
    let result = await updateServiceService(req,res)
    return res.json(result)

}


export const DeleteService=async (req,res)=>{
    let result = await deleteServiceService(req,res)
    return res.json(result)

}