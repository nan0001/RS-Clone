import { Router } from 'express';
import UserController from '../controller/User.controller';
import addDate from '../middleware/addDate.middleware';
import authJwt from '../middleware/authJwt.middleware';

const userRouter = Router();
const userController = new UserController();

// get user data
userRouter.get('/get', authJwt, userController.getUserData);

// get all user cookies count
userRouter.get('/getAll', userController.getAllUserCookies);

// post user data
userRouter.post('/post', [authJwt, addDate], userController.postUserData);

export default userRouter;
