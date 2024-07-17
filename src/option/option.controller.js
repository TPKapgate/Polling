import { addVoteRepo, deleteoptRepo } from "./option.Repository.js";



export const deleteOpt = async(req,res)=>{
    const optID = req.params.id;
    const temp = await deleteoptRepo(optID);
    res.send(temp);
}

export const addVote = async(req,res)=>{
    const optID = req.params.id;
    const temp = await addVoteRepo(optID);
    res.send(temp)
}