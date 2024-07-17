import mongoose from "mongoose";
import { optSchema } from "./option.Schema.js";
import { queModal } from "../question/que.repository.js";
// import { text } from "body-parser";

const optionModel = mongoose.model("options",optSchema);

export const CreateNewOption = async(text)=>{
    const temp = await optionModel({text});
    await temp.save()
    return temp;
}

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
}

export const addVoteRepo = async (id)=>{
    try
    {
    const temp = await optionModel.findById(id);
    console.log(temp)
    temp.votes +=1;
    await temp.save();
    return temp
    }catch{
        return "Enter valid option ID"
    }
}


export default optionModel;