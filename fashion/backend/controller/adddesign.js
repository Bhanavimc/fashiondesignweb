const mongoose=require("mongoose");
const { TshirtDesign } = require("../models/Category"); // Adjust the path as necessary
// Controller to handle saving a T-shirt design
const postTshirtDesign = async (req, res) => {
    const session=await mongoose.startSession();
    session.startTrransaction();
    try {
        const formdata=req.body;
        const requiredFields=["color","image"];
        // Create a new T-shirt design instance
        const missingFields=requiredFields.filter(field=>!formdata[field]);
        if(missingFields.length){
            throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
        }       
        const design=new TshirtDesign({...formdata, createdAt: new Date() });
        await design.save({ session });
        session.commitTransaction();
        res.status(201).send(design);
        } catch (error) {
        session.abortTransaction();
        console.error(error);
        res.status(400).send(error.message);
    } finally {
        await session.endSession();
    }

}; 
module.exports = postTshirtDesign;
