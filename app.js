import express from 'express';
import cors from 'cors';
import rateLimit from "express-rate-limit";
import helmet from 'helmet';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import {DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE,WEB_CACHE} from "./Backend/app/config/config.js";
import router from "./Backend/routes/api.js";
import path from "path";

const app = express();

// App Use Default Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: true }));
app.use(helmet())

// App Use Limiter

const limiter = rateLimit({windowMs:REQUEST_TIME,max:REQUEST_NUMBER})
app.use(limiter)

// Cache
app.set('etag', WEB_CACHE)

// Database Connect
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("Database Connected!");
})
    .catch((err)=>{
        console.log("Database Not Connected!");
    })

app.use("/api",router)

app.listen(PORT, () => {
    console.log("Server running on port:" +PORT);
})

app.use(express.static('client/dist'));

// Add React Front End Routing
