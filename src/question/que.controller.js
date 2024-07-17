import { CreateNewOption } from "../option/option.Repository.js";
import { createQue, deleteQueRepo, getQue, showQueRepo } from "./que.repository.js";


// Create Que
export const createQuestion = async(req,res)=>{
    console.log(req.body)
    const temp =  await createQue(req.body);
    res.send(temp)
}

// Create Option
export const createOption = async(req,res)=>{
    const queID = req.params.id;
    const text = req.body.text;
    // get Que
    const que = await getQue(queID);
    // create new option
    const newOption = await CreateNewOption(text);
    console.log(que)
    // create link for adding vote using id
    const link = `http://localhost:3000/options/${newOption._id}/add_vote`;
    newOption.link_to_vote = link;
    await newOption.save()
    que.options.push(newOption);
    await que.save();
    // respond to server using que data
    res.send(que)
    
};

// Delete que
export const deleteQue = async(req,res)=>{
    const queID = req.params.id;
    // Call Repository delete function
    const temp = await deleteQueRepo(queID)
    res.send(temp)
}

// Show Question
export const showQue = async(req,res)=>{
    const queID = req.params.id;
    const temp =  await showQueRepo(queID);
    res.send(temp)
}

