import express from "express";
import { addVote, deleteOpt } from "./option.controller.js";

export const optRouter = express.Router();

optRouter.route("/:id/delete").delete(deleteOpt) // Delete option
optRouter.route("/:id/add_vote").get(addVote)    // Add vote to option
