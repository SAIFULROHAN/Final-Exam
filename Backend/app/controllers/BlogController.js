import {CreateBlogService,getAllBlogService,getBlogByIdService,UpdateBlogService,DeleteBlogService} from "../Service/BlogService.js";


export const CreateBlog=async (req,res)=>{
    let result = await CreateBlogService(req,res)
    return res.json(result)

}


export const getAllBlog=async (req,res)=>{
    let result = await getAllBlogService(req,res)
    return res.json(result)

}


export const getBlogByID=async (req,res)=>{
    let result = await getBlogByIdService(req,res)
    return res.json(result)

}


export const UpdateBlog=async (req,res)=>{
    let result = await UpdateBlogService(req,res)
    return res.json(result)

}


export const DeleteBlog=async (req,res)=>{
    let result = await DeleteBlogService(req,res)
    return res.json(result)

}