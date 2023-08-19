import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function initializeMongoServer() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  mongoose.connect(mongoUri);

  mongoose.connection.on("error", (e) => {
    if (e.message.code === "ETIMEDOUT") {
      console.log(e);
      mongoose.connect(mongoUri);
    }
    console.log(e);
  });
}

initializeMongoServer();

// @ts-ignore
afterEach(clearDatabase);

async function clearDatabase() {
  const collections = mongoose.connection.collections;

  for (var key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}
