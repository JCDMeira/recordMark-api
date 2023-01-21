import UserModel from "../models/UserModel";

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

  static async editUser({ body, params: { id } }, res) {
    try {
      const user = UserModel.findByIdAndUpdate(
        id,
        {
          ...body,
          updated_at: new Date().getTime(),
        },
        { returnDocument: "after" }
      );
      console.log(user);

      return res
        .status(200)
        .json({ message: "User updated sucessfully", user });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }
}
export default userController;
