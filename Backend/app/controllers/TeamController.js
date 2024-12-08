import {CreateTeamService,getTeamService,updateTeamService,deleteTeamService} from "../service/TeamService.js";


export const CreateTeam=async (req,res)=>{
    let result = await CreateTeamService(req,res)
    return res.json(result)

}


export const getTeam=async (req,res)=>{
    let result = await getTeamService(req,res)
    return res.json(result)

}


export const UpdateTeam=async (req,res)=>{
    let result = await updateTeamService(req,res)
    return res.json(result)

}


export const deleteTeam=async (req,res)=>{
    let result = await deleteTeamService(req,res)
    return res.json(result)

}