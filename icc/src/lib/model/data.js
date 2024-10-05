import mongoose from "mongoose";
const datamodel = new mongoose.Schema({
        id: { type: String },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        country:{type:String}
    });
    
    export const data = mongoose.models.users || mongoose.model("users", datamodel);
    
