import express from "express";
import { createOption, createQuestion, deleteQue, showQue } from "./que.controller.js";
import { throwError } from "../../err.js";
import { optRouter } from "../option/option.routes.js";


export const queRouter = express.Router();

queRouter.route("/create").post(createQuestion);  //To create Que
queRouter.route("/create").get(throwError); // Just to throw error as action should be post not get
queRouter.route("/:id/options/create").post(createOption); // Create Option
queRouter.route("/:id/delete").delete(deleteQue) //Delete Que
queRouter.route("/:id").get(showQue) //Show Que


