import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    quantify: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { version: true, timestamps: true })
// productSchema.plugin(mongoosePaginate);
export default mongoose.model("Products", productSchema)