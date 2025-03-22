const mongoose=require("mongoose");
async function connectDB(){
    try{
        await mongoose.connect(ProcessingInstruction.env.MONGODB_URI);
        console.log("CONNECTED");

    }
    catch(err){
        console.log("ERROR",err);
    }
}
module.exports=connectDB;