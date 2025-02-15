import BlogModel from "../model/BlogModel.js";


export const CreateBlogService = async (req,res)=>{

    try {
        const {title,des,img} = req.body;
        const newBlog = new BlogModel({title,des,img})
        const savedBlog = await newBlog.save();
        res.status(201).json({savedBlog})
    }catch(e){
        res.status(500).json({  message: "Failed to create blog", error: e.message });
    }

}

// get all blog

export const getAllBlogService = async (req,res)=>{
    try {
        const blogs= await BlogModel.find();
        res.status(200).json({blogs})
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// get single blog

export const getBlogByIdService = async (req,res)=>{
    try {
        const Blog = await BlogModel.findById(req.params.id);
        if(!Blog){
            return res.status(404).json({message:"No blog found"})
        } else {
            res.status(200).json(Blog)
        }
    } catch(e){
        res.status(500).json({ error: e.message });
    }
}

// Update blog

export const UpdateBlogService = async (req,res)=>{
    const { id } = req.params;
    const {title, description, image} = req.body;

    try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(id,  { title, description, image }, {
            new: true,
        });
        if(!updatedBlog){
            res.status(404).json({message:"No blog found"})
        } else {
            res.status(200).json(updatedBlog)
        }
    } catch (e) {
        res.status(500).json({ error: e.message });

    }
}

// delete blog

export const DeleteBlogService = async (req,res)=>{
    try {
        await BlogModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Blog deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}