import app from "./index.js";
import { connectToDb } from "./db.js";

app.listen(3000, async () =>{
    await connectToDb();
    console.log("Server is running at port 3000")
})


