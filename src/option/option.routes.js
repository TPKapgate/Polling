import express from "express";
import { addVote, deleteOpt } from "./option.controller.js";

export const optRouter = express.Router();

optRouter.route("/:id/delete").delete(deleteOpt)
optRouter.route("/:id/add_vote").get(addVote)