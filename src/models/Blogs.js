import mongoose from "mongoose";



const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: true,
    }
}, { version: true, timestamps: true })

export default mongoose.model("Blogs", BlogSchema)