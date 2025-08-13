import mongoose from "mongoose";
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            
        })
        console.log("done")
    }
    catch(err){
        console.log("failed")
        console.error(`Error: ${err.message}`);
    }
}
export default connectDB