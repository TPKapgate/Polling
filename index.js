import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { queRouter } from "./src/question/que.routes.js";
import { optRouter } from "./src/option/option.routes.js";


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use("/questions",queRouter )
app.use("/options",optRouter)



export default app;