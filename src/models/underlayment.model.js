import mongoose from "mongoose";

const underlaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: [String],
        required: true
    },
    material: {
        type: String,
        enum: ["EVA", "EPE"],
        default: "EVA"
    }, 
    uses: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    sqftPerRoll: {
        type: Number,
        required: true,
    },
    measurements: {
        type: Number,
        required: true,
    },
    features: {
        type: [String]
    }
})

export default mongoose.model('Underlayment', underlaymentSchema)