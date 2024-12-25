import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // Corrected: ObjectId for referencing the Category model
        ref: 'Category', // Reference to the Category model
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    shipping: {
        type: Boolean, // Corrected: Boolean type for the shipping field
    },
    quantity: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

export default mongoose.model('Products', productSchema);
