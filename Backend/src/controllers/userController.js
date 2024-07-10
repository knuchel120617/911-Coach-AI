import UsersModel from "../models/User.js";

const UserController = {
  createUser: async (req, res, next) => {
    console.log('inside the create user')
    console.log('req', req)
    console.log('req.body', req.body)
    try {
      console.log('starting to create the user')
      const email = req.email;
      const name = req.name;
      //const { name, email } = req.body; //userId is the Firebase id
      console.log("req.email", email)

      const user = await UsersModel.create({ name, email });
      console.log('added this user to database', user);
      res.status(201).json(user);
    } catch (error) {
      console.log('not able to add user to db', error);
      next(error);
    }
  },
  getUser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await UsersModel.findById(userId);
      if (!user) return next(new Error("User not found"));
      res.status(200).json(user);
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