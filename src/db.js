import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost/cpf-web")
        console.log(">>> DB Connected <<<");
    } catch (error) {
        console.error(error)
    }
}