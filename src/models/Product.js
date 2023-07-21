import mongoose from "mongoose";



const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { version: true, timestamps: true })
export default mongoose.model("Product", productSchema)