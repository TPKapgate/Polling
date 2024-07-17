import mongoose from "mongoose";

const baseURL = process.env.MONGODB || "0.0.0.0:27017";

export const connectToDb = async () =>{
    try{
        await mongoose.connect(`mongodb://${baseURL}/polls`,{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log("Database Conncted!!!");
    }catch(err){
        console.log(err)
    }
};