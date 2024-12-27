import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database !");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;
    //[Learning] db.connections[0].readyState -> return a number 1 or 0.
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database connection failed!", error);
    process.exit(1);
  }
};

export default dbConnect;
