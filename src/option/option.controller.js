import { addVoteRepo, deleteoptRepo } from "./option.Repository.js";



// Delete option
export const deleteOpt = async(req,res)=>{
    const optID = req.params.id;
    const temp = await deleteoptRepo(optID);
    res.send(temp);
}

// ADd Vote
export const addVote = async(req,res)=>{
    const optID = req.params.id;
    const temp = await addVoteRepo(optID);
    res.send(temp)
}
