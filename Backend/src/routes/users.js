import express from "express"
import AuthController from '../controllers/firebase-auth-controller.js'
import UserController from '../controllers/userController.js'

const usersRouter = express.Router()

usersRouter.post('/register', AuthController.registerUser, UserController.createUser);
usersRouter.post('/login', AuthController.loginUser, UserController.getUser);
usersRouter.post('/logout', AuthController.logOutUser);

export default usersRouter;