import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export default async function(): Promise<void> {
    const mongoServer = new MongoMemoryServer();
    try {
        const inMemoryURI = await mongoServer.getUri();
        await mongoose.connect(inMemoryURI);
        console.log("Connected to in-memory MongoDB!");
    } catch (error) {
        console.error("Error connecting to in-memory MongoDB:", error);
        throw error;
    }
}
