import UserModel from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const toJSON = (value) => JSON.parse(JSON.stringify(value));

class userController {
  static async createUser({ body }, res) {
    try {
      const { username } = body;
      const date = new Date().getTime();

      const isUnic = await UserModel.find({ username });
      if (isUnic.length !== 0)
        res.status(400).json({ message: "This username alredy exist" });

      const result = await UserModel.create({
        ...body,
        created_at: date,
        updated_at: date,
      });

      return res
        .status(201)
        .json({ message: `User ${body.username} sucessful create` });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserModel.find({}, { username: 1 });
      res.status(200).json(allUsers);
    } catch (message) {
      res.status(400).json({ message });
    }
  }

  static async searchUsers(req, res) {
    try {
      const allUsers = await UserModel.find({}, { username: 1 });
      res.status(200).json(allUsers);
    } catch (message) {
      res.status(400).json({ message });
    }
  }

  static async editUser({ body, params: { id } }, res) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        id,
        {
          ...body,
          password: await bcrypt.hash(body.password, 10),
          updated_at: new Date().getTime(),
        },
        { returnDocument: "after" }
      );

      user.password = undefined;
      user.created_at = undefined;
      user.__v = undefined;

      return res
        .status(200)
        .json({ message: "User updated sucessfully", user });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async deletUser({ params: { id } }, res) {
    try {
      await UserModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "User sucessfully deleted" });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async login({ body: { username, password } }, res) {
    try {
      const user = await UserModel.findOne(
        { username },
        { __v: 0, created_at: 0, updated_at: 0 }
      ).select("+password");

      if (!user)
        return res
          .status(400)
          .json({ message: "Invalid email and/or password" });

      if (!(await bcrypt.compare(password, user.password)))
        return res
          .status(400)
          .json({ message: "Invalid email and/or password" });

      user.password = undefined;

      const token = jwt.sign({ id: user._id }, process.env.TOKEN_ENCRYPT, {
        expiresIn: "2h",
      });

      return res.status(200).json({ ...toJSON(user), token });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async logout(req, res) {}
}
export default userController;
