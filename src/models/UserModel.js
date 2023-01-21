import mongoose from "mongoose";
import bcrpty from "bcryptjs";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Number, required: true },
  updated_at: { type: Number, required: true },
});

UserSchema.pre("save", async function encryptPassword() {
  const passwordHash = await bcrpty.hash(this.password, 10);
  this.password = passwordHash;
});

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
