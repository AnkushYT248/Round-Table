import mongoose from "mongoose";

const ConnectToMongoClientDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection;
    }

    await mongoose.connect(process.env.MONGO_DB_CLIENT_URL);
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export { ConnectToMongoClientDb };
