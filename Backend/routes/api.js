import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UserController from "../app/controllers/UsersController.js";
import * as BlogController from "../app/controllers/BlogController.js";
import * as ServiceController from "../app/controllers/ServiceController.js";
import * as TeamController from "../app/controllers/TeamController.js";
import {deleteTeam, getTeam, UpdateTeam} from "../app/controllers/TeamController.js";
import {Login} from "../app/controllers/UsersController.js";


// Router
router.post("/Registration",UserController.Registration)
router.post("/Login",UserController.Login)
router.post("/UserLogout",AuthMiddleware,UserController.UserLogout)


// Blog api
router.post("/CreateBlog",BlogController.CreateBlog)
router.get("/getAllBlog",BlogController.getAllBlog)
router.get("/getBlogByID/:id",BlogController.getBlogByID)
router.put("/UpdateBlog/:id",BlogController.UpdateBlog)
router.delete("/DeleteBlog/:id",BlogController.DeleteBlog)

// Service api

router.post("/CreateService",ServiceController.CreateService)
router.get("/getAllService",ServiceController.getAllService)
router.put("/UpdateService/:id",ServiceController.UpdateService)
router.delete("/DeleteService/:id",ServiceController.DeleteService)

// DashBoard api

router.get("/dashboard", AuthMiddleware, (req, res) => {
    res.json({ message: "Welcome to the dashboard!" });
});


// Team Api
router.post("/CreateTeam",TeamController.CreateTeam)
router.get("/getTeam",TeamController.getTeam)
router.put("/UpdateTeam/:id",TeamController.UpdateTeam)
router.delete("/deleteTeam/:id",TeamController.deleteTeam)
























export default router;