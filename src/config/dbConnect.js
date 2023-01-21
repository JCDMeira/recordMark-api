import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.set("strictQuery", true);

mongoose.connect(process.env.CONNETIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;
