import mongoose from "mongoose";

const setSchema = new mongoose.Schema({
    materialType: {
        type: String,
        required: true
    },
    collectionName: {
        type: String,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    atributes: {
        mils: {
            type: String,
            required: true
        },
        plankSize: {
            type: String,
            required: true
        },
        thickness: {
            type: String,
            required: true
        },
        padding: {
            type: String,
            required: true
        },
        planksPerBox: {
            type: Number,
            required: true
        },
        sqftPerBox: {
            type: Number,
            required: true
        },
        instalationMethod: {
            type: String,
            enum: [],
            required: true
        },
        warranty: {
            type: String,
            required: true
        },
        setClass: {
            type: String,
            required: true
        },
        features: {
            type: [String],
        }
    }
});

export default mongoose.model('Set', setSchema);