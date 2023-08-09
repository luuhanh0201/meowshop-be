import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, { version: true, timestamp: true })

export default mongoose.model('Category', categorySchema)