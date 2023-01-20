import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: trusted, unique: true },
  password: { type: String, required: true },
  created_at: { type: Number, required: true },
  updated_at: { type: Number, required: true },
});

const UserModel = mongoose.model("user", UserSchema);
