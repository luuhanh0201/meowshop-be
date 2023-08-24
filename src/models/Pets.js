import mongoose from "mongoose";


const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default mongoose.model("Pets", petSchema)