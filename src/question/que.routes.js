import express from "express";
import { createOption, createQuestion, deleteQue, showQue } from "./que.controller.js";
import { throwError } from "../../err.js";
import { optRouter } from "../option/option.routes.js";


export const queRouter = express.Router();

queRouter.route("/create").post(createQuestion);
queRouter.route("/create").get(throwError);
queRouter.route("/:id/options/create").post(createOption);
queRouter.route("/:id/delete").delete(deleteQue)
queRouter.route("/:id").get(showQue)


