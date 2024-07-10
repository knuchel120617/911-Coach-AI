import express from "express"
import AuthController from '../controllers/firebase-auth-controller.js'
const usersRouter = express.Router()
//const authController = new AuthController();


// import UserController

usersRouter.post('/register', AuthController.registerUser); //TODO add user to db
usersRouter.post('/login', AuthController.loginUser); //TODO get user from db
usersRouter.post('/logout', AuthController.logOutUser);

export default usersRouter;