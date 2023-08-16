import mongoose from 'mongoose';

export default async function(uri: string): Promise<void>{
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}
