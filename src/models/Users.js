import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    role :{
        type: String,
        default: "member",
        required: false
    }
 
}, {
    timestamps: true, versionKey: false
})

export default mongoose.model('Users', userSchema)