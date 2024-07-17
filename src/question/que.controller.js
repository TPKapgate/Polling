import { CreateNewOption } from "../option/option.Repository.js";
import { createQue, deleteQueRepo, getQue, showQueRepo } from "./que.repository.js";


export const createQuestion = async(req,res)=>{
    console.log(req.body)
    const temp =  await createQue(req.body);
    res.send(temp)
}

export const createOption = async(req,res)=>{
    const queID = req.params.id;
    const text = req.body.text;
    const que = await getQue(queID);
    const newOption = await CreateNewOption(text);
    console.log(que)
    const link = `http://localhost:3000/options/${newOption._id}/add_vote`;
    newOption.link_to_vote = link;
    await newOption.save()
    que.options.push(newOption);
    await que.save();
    res.send(que)
    
};

export const deleteQue = async(req,res)=>{
    const queID = req.params.id;
    const temp = await deleteQueRepo(queID)
    res.send(temp)
}

export const showQue = async(req,res)=>{
    const queID = req.params.id;
    const temp =  await showQueRepo(queID);
    res.send(temp)
}

