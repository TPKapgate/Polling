import mongoose from "mongoose";
import { queSchema } from "./que.Schema.js";
import optionModel from "../option/option.Repository.js";

export const queModal = mongoose.model("question",queSchema);

export const createQue = async (text) =>{
    try{
        console.log(text)
        const temp = queModal(text)
        await temp.save();
        return temp
    }catch(err){
        console.log(err)
    }
}

export const getQue =  async (id)=>{
    try{
        const temp = queModal.findById(id);
        return temp
    }catch(err)
    {
        console.log(err)
    }
}


export const deleteQueRepo = async(id)=>{
    try
    {
        const que = await queModal.findById(id);
        if (!que) {
            throw new Error('Question not Found not found');
        }
        // console.log(que.options)
        const temp = que.options.filter(ele => ele.votes >0)
        console.log(temp)
        if (temp.length >0){
            return "This Question is having options with Positive votes. Can not Delete"
        }
        else
        {
            await queModal.findByIdAndDelete(id);
            return "Question Deleted Successfully!!!"
        }
    }catch(err)
    {
        console.log(err);
        return "Question not found. CHeck you ID."
    }
};

export const deleteoptRepo = async (id)=>{
    try{
        const option = await optionModel.findById(id);
        if (!option)
        {
            return "Not valid option ID."
        }
        else
        {
            if(option.votes == 0)
            {
                await optionModel.findByIdAndDelete(id);
                const que = await queModal.findOne({'options._id':id});
                que.options = que.options.filter(ele => ele._id.toString() !== id);
                que.save();
                return "Option deleted SuccessFully!!!"
            }
            else
            {
                return "Option is Having positive votes. Can not delete."
            }
        }

    }catch(err)
    {
        return "Not valid option ID."
    }
};

export const showQueRepo = async(id)=>{
    try
    {
        const temp = await queModal.findById(id);
        return temp;

    }catch{
        return "Not valid Que ID"
    }
}




