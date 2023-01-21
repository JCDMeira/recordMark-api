import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect(
  `mongodb+srv://progApi:progApi@cluster0.jhwjo5u.mongodb.net/recordMark`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

export default db;
