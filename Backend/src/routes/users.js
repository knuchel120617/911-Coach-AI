import express from "express"
import AuthController from '../controllers/firebase-auth-controller.js'
const usersRouter = express.Router()
import UserController from '../controllers/userController.js'


// import UserController

usersRouter.post('/register', AuthController.registerUser, UserController.createUser);
usersRouter.post('/login', AuthController.loginUser, UserController.getUser); //TODO get user from db
usersRouter.post('/logout', AuthController.logOutUser);

export default usersRouter;