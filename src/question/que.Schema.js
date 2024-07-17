import { text } from "express";
import mongoose from "mongoose";
import { optSchema } from "../option/option.Schema.js";

export const queSchema = new mongoose.Schema({
    title:String,
    options:[optSchema]
});

