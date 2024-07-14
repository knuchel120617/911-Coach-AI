import UsersModel from "../models/User.js";

const UserController = {
  createUser: async (req, res, next) => {

    try {
      const email = req.body.email;
      const name = req.body.name;

      const user = await UsersModel.create({ name, email });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },
  getUser: async (req, res, next) => {
    try {
      const email = req.body.email;
      const token = req.accessToken;
      const user = await UsersModel.findOne({ email });
      if (!user) return next(new Error("User not found"));
      res.status(200).json({
        accessToken: req.accessToken,
        userData: user
      });
    } catch (error) {
      next(error);
    }
  }
  /*
  deleteUser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await UsersModel.findByIdAndDelete(userId);
      if (!user) return next(new Error("User not found"));
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  },
  }
  */
}

export default UserController;